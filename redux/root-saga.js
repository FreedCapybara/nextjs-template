import { all } from 'redux-saga/effects';

import { authSagas } from './auth/auth-sagas';
import { billingSagas } from './billing/billing-sagas';
import { librarySagas } from './library/library-sagas';
import { marketplaceSagas } from './marketplace/marketplace-sagas';
import { productSagas } from './product/product-sagas';

function * rootSaga () {
  yield all([
    ...authSagas,
    ...billingSagas,
    ...librarySagas,
    ...marketplaceSagas,
    ...productSagas
  ]);
}

export default rootSaga;
