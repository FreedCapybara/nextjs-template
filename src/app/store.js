import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { appReducer } from '@features/app';
import { authReducer } from '@features/auth';

export function createStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      auth: authReducer
    }
  });
}

export const wrapper = createWrapper(createStore);

