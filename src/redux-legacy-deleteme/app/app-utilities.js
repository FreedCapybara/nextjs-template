import { put } from 'redux-saga/effects';

import { appActions } from './app-actions';

export function wrap(saga) {
  return function * (action) {
    yield put(appActions.setError(false));
    yield put(appActions.setLoading(true));
    try {
      yield saga(action);
    } catch (e) {
      yield put(appActions.setError(true));
      console.error(e);
    }
    yield put(appActions.setLoading(false));
  };
}

