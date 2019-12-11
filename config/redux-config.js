/**
 * See https://github.com/zeit/next.js/tree/acf7d0ad3bdde5fd579e80325894f4b8a262130f/examples/with-redux-saga
 */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, initialState } from '@redux/root-reducer';
import rootSaga from '@redux/root-saga';

const dev = process.env.NODE_ENV !== 'production';

const bindMiddleware = (middleware, useDevTools) => {
  if (useDevTools) {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState, useDevTools = dev) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(),
    state,
    bindMiddleware([sagaMiddleware], useDevTools)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
