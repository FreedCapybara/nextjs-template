import { put, delay, takeLatest } from 'redux-saga/effects';

import { exampleActions } from './example-actions';

export function * exampleSaga() {
  while (true) {
    yield put(exampleActions.increment());
    yield delay(1000);
  }
}

export const exampleSagas = [
  takeLatest('EXAMPLE_SAGA', exampleSaga)
];

