import { all } from 'redux-saga/effects';

import { authSagas } from './auth/auth-sagas';

function * rootSaga () {
  yield all([
    ...authSagas
  ]);
}

export default rootSaga;
