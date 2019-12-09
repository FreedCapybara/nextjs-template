import { put, delay, takeLatest } from 'redux-saga/effects';

import { exampleActions } from './example-actions';

function * exampleSaga() {
  while (true) {
    yield put(exampleActions.increment());
    yield delay(1000);
  }
}

export function * exampleSagas() {
  return [
    yield takeLatest('EXAMPLE_SAGA', exampleSaga)
  ];
}

