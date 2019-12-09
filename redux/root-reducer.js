import { combineReducers } from 'redux';

import { exampleReducer, exampleInitialState } from './example/example-reducer';

export const initialState = {
  exampleReducer: exampleInitialState
};

export const rootReducer = () => combineReducers({
  exampleReducer
});

