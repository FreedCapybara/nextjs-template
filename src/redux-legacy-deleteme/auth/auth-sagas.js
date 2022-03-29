import { put, call, takeLeading } from 'redux-saga/effects';
import Router from 'next/router';
import Cookies from 'js-cookie';
import moment from 'moment';

import { http } from '@utils/http';

import { appActions, productActions } from '@redux/actions';
import { wrap } from '@redux/app/app-utilities';

import { authActions } from './auth-actions';
import { authApi } from './auth-api';

function setToken(data) {
  // set the cookie
  const expires = moment(data.expires).diff(moment(), 'days', true);
  Cookies.set('token', data.token, { expires });
  // set the Authorization header
  http.defaults.headers['Authorization'] = `Bearer ${data.token}`;
}

export function * loginSaga(action) {
  yield put(authActions.setAuthError(false));
  const response = yield call([authApi, 'login'], action.credentials); // see https://github.com/redux-saga/redux-saga/issues/1389

  const data = yield response.json();

  if (data.token) {
    // update state and navigate
    setToken(data);
    yield getUserSaga();
    yield call(Router.push, action.redirect || '/');
  } else {
    yield put(authActions.setAuthError(true));
  }
}

export function * registerSaga(action) {
  yield put(authActions.setAuthError(false));
  let response;
  try {
    response = yield call([authApi, 'register'], action.credentials);
  } catch {
    yield put(authActions.setAuthError(true));
    return;
  }

  const data = yield response.json();

  if (data.token) {
    // update state and navigate
    setToken(data);
    yield getUserSaga();
    yield call(Router.push, action.redirect || '/');
  } else {
    yield put(authActions.setAuthError(true));
  }
}

export function * logoutSaga() {
  // remove the cookie
  Cookies.remove('token');

  // clear state and navigate
  yield call(Router.push, '/login');

  try
  {
    // logout from the server
    yield call([authApi, 'logout']);
  } catch { /* not much to be done about it /shrug */ } // eslint-disable-line no-empty

  yield put(appActions.clearState());

  // remove the Authorization header
  delete http.defaults.headers['Authorization'];
}

export function * checkUsernameSaga(action) {
  const response = yield call([authApi, 'checkUsername'], action.username);
  const data = yield response.json();
  yield put(authActions.setAuthResult(data));
}

export function * getUserSaga() {
  const response = yield call([authApi, 'getUser']);
  const data = yield response.json();
  yield put(authActions.setUser(data));
}

export function * getUserActivitySaga() {
  const response = yield call([authApi, 'getUserActivity']);
  const data = yield response.json();
  yield put(authActions.setUserActivity(data));
}

export function * forgotPasswordSaga(action) {
  yield call([authApi, 'forgotPassword'], action.model);
  yield call(Router.push, '/account/forgot-password-success');
}

export function * resetPasswordSaga(action) {
  const response = yield call([authApi, 'resetPassword'], action.model);
  const data = yield response.json();
  if (data.succeeded) {
    yield call(Router.push, '/account/reset-password-success');
  } else {
    yield put(authActions.setAuthError(true));
  }
}

export function * changePasswordSaga(action) {
  const response = yield call([authApi, 'changePassword'], action.model);
  const data = yield response.json();
  if (data.token) {
    // update state and navigate
    setToken(data);
    yield getUserSaga();
    yield call(Router.push, '/account');
  } else {
    yield put(authActions.setAuthError(true));
  }
}

export const authSagas = [
  takeLeading('LOGIN_SAGA', wrap(loginSaga)),
  takeLeading('REGISTER_SAGA', wrap(registerSaga)),
  takeLeading('LOGOUT_SAGA', logoutSaga),
  takeLeading('CHECK_USERNAME_SAGA', checkUsernameSaga),
  takeLeading('GET_USER_SAGA', wrap(getUserSaga)),
  takeLeading('GET_USER_ACTIVITY_SAGA', wrap(getUserActivitySaga)),
  takeLeading('FORGOT_PASSWORD_SAGA', wrap(forgotPasswordSaga)),
  takeLeading('RESET_PASSWORD_SAGA', wrap(resetPasswordSaga)),
  takeLeading('CHANGE_PASSWORD_SAGA', wrap(changePasswordSaga))
];

