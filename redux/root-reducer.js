import { combineReducers } from 'redux';

import { exampleReducer, exampleInitialState } from './example/example-reducer';

export const initialState = {
  exampleState: exampleInitialState
};

export const rootReducer = () => combineReducers({
  exampleState: exampleReducer
});

