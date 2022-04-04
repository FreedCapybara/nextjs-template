import { configureStore } from '@reduxjs/toolkit';

import appReducer from '@features/app/appSlice';

export function createStore() {
  return configureStore({
    reducer: {
      app: appReducer
    }
  });
}

export const store = createStore();

