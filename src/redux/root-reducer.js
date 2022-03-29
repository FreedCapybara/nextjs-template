import { combineReducers } from 'redux';

import { appReducer, appInitialState } from './app/app-reducer';
import { authReducer, authInitialState } from './auth/auth-reducer';

export const initialState = {
  appState: appInitialState,
  authState: authInitialState
};

export const rootReducer = () => combineReducers({
  appState: appReducer,
  authState: authReducer
});

