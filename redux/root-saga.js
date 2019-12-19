import { all } from 'redux-saga/effects';

import { authSagas } from './auth/auth-sagas';
import { exampleSagas } from './example/example-sagas';

function * rootSaga () {
  yield all([
    ...authSagas,
    ...exampleSagas
  ]);
}

export default rootSaga;
