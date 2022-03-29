import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '@app/root-reducer';

export function createStore() {
  const reducer = rootReducer;
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    // add Redux devtools
    const { composeWithDevTools } = require('redux-devtools-extension');
    middleware.push(composeWithDevTools);

    // add redux-immutable-state-invariant
    // https://redux.js.org/style-guide/style-guide#do-not-mutate-state
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
    middleware.push(reduxImmutableStateInvariant);
  }

  return configureStore({
    reducer,
    middleware
  });
}

export const store = createStore();

