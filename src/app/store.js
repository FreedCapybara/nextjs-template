/*
 * From https://github.com/vercel/next.js/tree/canary/examples/with-redux-saga
 */

import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import { rootReducer } from '@redux/root-reducer';
import rootSaga from '@redux/root-saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');

    // add redux-immutable-state-invariant
    // https://redux.js.org/style-guide/style-guide#do-not-mutate-state
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
    middleware.push(reduxImmutableStateInvariant);

    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper(makeStore, { debug: true });

