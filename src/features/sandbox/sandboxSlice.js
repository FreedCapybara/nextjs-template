import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { createSelector } from 'reselect';
import { authenticatedRequest } from './sandboxAPI';

const initialState = {
};

export const authenticatedRequestThunk = createAsyncThunk(
  'sandbox/authenticatedRequest',
  async (ssrContext) => {
    const response = await authenticatedRequest(ssrContext);
    return await response.json();
  }
);

export const waitThunk = createAsyncThunk(
  'sandbox/fake',
  async () => {
    await new Promise((resolve) =>
      setTimeout(() => resolve(), 2000)
    );
  }
);

export const sandboxSlice = createSlice({
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
} = sandboxSlice.actions;

export const sandboxReducer = sandboxSlice.reducer;

