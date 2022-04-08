import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { appReducer } from '@features/app';
import { sandboxReducer } from '@features/sandbox';

export function createStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      sandbox: sandboxReducer
    }
  });
}

export const wrapper = createWrapper(createStore);

