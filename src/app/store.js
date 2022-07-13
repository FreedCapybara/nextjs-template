import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { appReducer } from '@features/app';
import { authReducer } from '@features/auth';
import { sandboxReducer } from '@features/sandbox';

export function createStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      auth: authReducer,
      sandbox: sandboxReducer
    }
  });
}

export const wrapper = createWrapper(createStore);

