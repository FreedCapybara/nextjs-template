import { combineReducers } from 'redux';

import { appReducer, appInitialState } from './app/app-reducer';
import { authReducer, authInitialState } from './auth/auth-reducer';
import { exampleReducer, exampleInitialState } from './example/example-reducer';

export const initialState = {
  appState: appInitialState,
  authState: authInitialState,
  exampleState: exampleInitialState
};

export const rootReducer = () => combineReducers({
  appState: appReducer,
  authState: authReducer,
  exampleState: exampleReducer
});

