import { runSaga } from 'redux-saga';
import Router from 'next/router';

import {
  authSagas,
  loginSaga,
  registerSaga,
  logoutSaga,
  getUserSaga,
  updateProfileSaga,
  forgotPasswordSaga,
  resetPasswordSaga
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

    jest.spyOn(authApi, 'login').mockReturnValue(response);
    jest.spyOn(Router, 'push').mockImplementation(() => {});

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

    jest.spyOn(authApi, 'login').mockReturnValue(response);
    jest.spyOn(Router, 'push').mockImplementation(() => {});

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

    jest.spyOn(authApi, 'register').mockReturnValue(response);
    jest.spyOn(Router, 'push').mockImplementation(() => {});

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, registerSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(data));
  });

  it('should run registerSaga and handle errors', async () => {
    jest.spyOn(authApi, 'register').mockImplementation(() => {
      throw new Exception('test');
    });

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

    jest.spyOn(authApi, 'register').mockReturnValue(response);
    jest.spyOn(Router, 'push').mockImplementation(() => {});

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, registerSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setAuthError(true));
  });

  it('should run logoutSaga', async () => {
    jest.spyOn(authApi, 'logout').mockImplementation(() => {});
    jest.spyOn(Router, 'push').mockImplementation(() => {});

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

    jest.spyOn(authApi, 'getUser').mockReturnValue(response);
    jest.spyOn(Router, 'push').mockImplementation(() => {});

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, getUserSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(data));
  });

  it('should run updateProfileSaga', async () => {
    const data = {
      email: 'test@test.net'
    };
    const response = {
      json: () => Promise.resolve(data)
    };

    jest.spyOn(authApi, 'updateProfile').mockReturnValue(response);
    jest.spyOn(Router, 'push').mockImplementation(() => {});

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, updateProfileSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setUser(data));
  });

  it('should run forgotPasswordSaga', async () => {
    const spy = jest.spyOn(authApi, 'forgotPassword').mockImplementation(() => {});
    jest.spyOn(Router, 'push').mockImplementation(() => {});

    const sagaOptions = {};
    await runSaga(sagaOptions, forgotPasswordSaga, {}).toPromise();

    expect(spy).toHaveBeenCalled();
  });

  it('should run resetPasswordSaga', async () => {
    const spy = jest.spyOn(authApi, 'resetPassword').mockImplementation(() => {});
    jest.spyOn(Router, 'push').mockImplementation(() => {});

    const sagaOptions = {};
    await runSaga(sagaOptions, resetPasswordSaga, {}).toPromise();

    expect(spy).toHaveBeenCalled();
  });

  it('should handle errors in resetPasswordSaga', async () => {
    jest.spyOn(authApi, 'resetPassword').mockImplementation(() => {
      throw new Exception('test');
    });

    const dispatched = [];
    const sagaOptions = {
      dispatch: (action) => dispatched.push(action)
    };
    await runSaga(sagaOptions, resetPasswordSaga, {}).toPromise();

    expect(dispatched).toContainEqual(authActions.setAuthError(true));
  });
});
