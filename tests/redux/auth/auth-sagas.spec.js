import { runSaga } from 'redux-saga';
import Router from 'next/router';

import {
  authSagas,
  loginSaga,
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
    const mockUser = {
      token: 'test'
    };
    const response = {
      json: () => Promise.resolve(mockUser)
    };

    spyOn(authApi, 'login').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    const result = await runSaga(sagaOptions, loginSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(mockUser));
  });

  it('should run loginSaga and set error', async () => {
    const mockUser = {
      token: null
    };
    const response = {
      json: () => Promise.resolve(mockUser)
    };

    spyOn(authApi, 'login').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    const result = await runSaga(sagaOptions, loginSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setError(true));
  });

  it('should run logoutSaga', async () => {
    spyOn(authApi, 'logout');
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    const result = await runSaga(sagaOptions, logoutSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser({}));
  });

  it('should run getUserSaga', async () => {
    const mockUser = {
      email: 'test@test.net'
    };
    const response = {
      json: () => Promise.resolve(mockUser)
    };

    spyOn(authApi, 'getUser').and.returnValue(response);
    spyOn(Router, 'push');

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    const result = await runSaga(sagaOptions, getUserSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(mockUser));
  });
});
