/**
 * See https://github.com/zeit/next.js/tree/acf7d0ad3bdde5fd579e80325894f4b8a262130f/examples/with-redux-saga
 */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, initialState } from './root-reducer';
import rootSaga from './root-saga';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(),
    state,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
