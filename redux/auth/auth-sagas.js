import { put, call, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import Cookies from 'js-cookie';
import moment from 'moment';

import { http } from '@lib/http';

import { authActions } from './auth-actions';
import { authApi } from './auth-api';

export function * loginSaga(action) {
  yield put(authActions.setError(false));

  const response = yield call([authApi, 'login'], action.credentials); // see https://github.com/redux-saga/redux-saga/issues/1389

  const data = yield response.json();

  if (data.token) {
    // set the cookie
    const expires = moment(data.expires).diff(moment(), 'days', true);
    Cookies.set('token', data.token, { expires });

    // set the Authorization header
    http.defaults.headers['Authorization'] = `Bearer ${data.token}`;

    // update state and navigate
    yield put(authActions.setUser(data));
    yield call(Router.push, '/');
  } else {
    yield put(authActions.setError(true));
  }
}

export function * logoutSaga() {
  yield call([authApi, 'logout']);

  // remove the cookie
  Cookies.remove('token');

  // remove the Authorization header
  delete http.defaults.headers['Authorization'];

  // clear state and navigate
  yield put(authActions.setUser({}));
  yield call(Router.push, '/login');
}

export function * getUserSaga() {
  const response = yield call([authApi, 'getUser']);

  const data = yield response.json();

  yield put(authActions.setUser(data));
}

export const authSagas = [
  takeLatest('LOGIN_SAGA', loginSaga),
  takeLatest('LOGOUT_SAGA', logoutSaga),
  takeLatest('GET_USER_SAGA', getUserSaga)
];

