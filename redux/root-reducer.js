import { combineReducers } from 'redux';

import { authReducer, authInitialState } from './auth/auth-reducer';
import { exampleReducer, exampleInitialState } from './example/example-reducer';

export const initialState = {
  authState: authInitialState,
  exampleState: exampleInitialState
};

export const rootReducer = () => combineReducers({
  authState: authReducer,
  exampleState: exampleReducer
});

