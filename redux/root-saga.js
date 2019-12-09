import { all } from 'redux-saga/effects';

import { exampleSagas } from './example/example-sagas';

function * rootSaga () {
  yield all([
    ...exampleSagas()
  ]);
}

export default rootSaga;
