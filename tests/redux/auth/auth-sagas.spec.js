import { runSaga } from 'redux-saga';
import Router from 'next/router';

import {
  authSagas,
  loginSaga,
  registerSaga,
  logoutSaga,
  getUserSaga
} from '@redux/auth/auth-sagas';
import { authActions } from '@redux/auth/auth-actions';
import { authApi } from '@redux/auth/auth-api';

describe('Auth sagas', () => {

  it('should get sagas', () => {
    expect(authSagas.length).toBeGreaterThan(0);
  });

  it('should run loginSaga', async () => {
    const data = {
      token: 'test'
    };
    const response = {
      json: () => Promise.resolve(data)
    };

    spyOn(authApi, 'login').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, loginSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(data));
  });

  it('should run loginSaga and set error', async () => {
    const data = {
      token: null
    };
    const response = {
      json: () => Promise.resolve(data)
    };

    spyOn(authApi, 'login').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, loginSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setAuthError(true));
  });

  it('should run registerSaga', async () => {
    const data = {
      token: 'test'
    };
    const response = {
      json: () => Promise.resolve(data)
    };

    spyOn(authApi, 'register').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, registerSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(data));
  });

  it('should run registerSaga and handle errors', async () => {
    spyOn(authApi, 'register').and.throwError();

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, registerSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setAuthError(true));
  });

  it('should run registerSaga and set error', async () => {
    const data = {
      token: null
    };
    const response = {
      json: () => Promise.resolve(data)
    };

    spyOn(authApi, 'register').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, registerSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setAuthError(true));
  });

  it('should run logoutSaga', async () => {
    spyOn(authApi, 'logout');
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, logoutSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser({}));
  });

  it('should run getUserSaga', async () => {
    const data = {
      email: 'test@test.net'
    };
    const response = {
      json: () => Promise.resolve(data)
    };

    spyOn(authApi, 'getUser').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, getUserSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(data));
  });
});
