import { put, call, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import Cookies from 'js-cookie';

import { http } from '@lib/http';

import { authActions } from './auth-actions';
import { authApi } from './auth-api';

export function * loginSaga(action) {
  yield put(authActions.setError(false));

  const response = yield call([authApi, 'login'], action.credentials); // see https://github.com/redux-saga/redux-saga/issues/1389

  const user = yield response.json();

  if (user.token) {
    // set the cookie
    Cookies.set('token', user.token, { expires: 1 });

    // set the Authorization header
    http.defaults.headers['Authorization'] = `Bearer ${user.token}`;

    // update state and navigate
    yield put(authActions.setUser(user));
    yield call(Router.push, '/');
  } else {
    yield put(authActions.setError(true));
  }
}

export const authSagas = [
  takeLatest('LOGIN_SAGA', loginSaga)
];

