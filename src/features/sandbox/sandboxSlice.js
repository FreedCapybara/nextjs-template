import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { createSelector } from 'reselect';
import { sandboxAPI } from './sandboxAPI';

import { defaultResponseHandler } from '@app/http';

const initialState = {
  data: {}
};

export const sandboxRequest = createAsyncThunk(
  'sandbox/sandboxRequest',
  async ({ context }, thunkAPI) => {
    const response = await sandboxAPI.sandboxRequest(context);
    return await defaultResponseHandler(response, thunkAPI, context);
  }
);

export const wait = createAsyncThunk(
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
  extraReducers: (builder) => {
    builder.addCase(sandboxRequest.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export const selectData = (state) => state.sandbox.data;

export const sandboxReducer = sandboxSlice.reducer;

