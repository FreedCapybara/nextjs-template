import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { createSelector } from 'reselect';
import { authenticatedRequest } from './sandboxAPI';

const initialState = {
};

export const authenticatedRequestThunk = createAsyncThunk(
  'sandbox/authenticatedRequest',
  async (ssrContext) => {
    const response = await authenticatedRequest(ssrContext);
    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'sandbox',
  initialState,
  reducers: {
    clearState: (state, action) => {
      return initialState;
    }
  }
});

export const {
  clearState
} = appSlice.actions;

export default appSlice.reducer;

