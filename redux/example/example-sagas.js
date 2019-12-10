import { put, delay, takeLatest } from 'redux-saga/effects';

import { exampleActions } from './example-actions';

export function * exampleSaga() {
  while (true) {
    // example http call -- see https://github.com/redux-saga/redux-saga/issues/1389
    // yield call([http, 'get'], '/test');
    yield put(exampleActions.increment());
    yield delay(1000);
  }
}

export const exampleSagas = [
  takeLatest('EXAMPLE_SAGA', exampleSaga)
];

