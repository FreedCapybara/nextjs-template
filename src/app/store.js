import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import appReducer from '@features/app';

export function createStore() {
  return configureStore({
    reducer: {
      app: appReducer
    }
  });
}

export const wrapper = createWrapper(createStore);

