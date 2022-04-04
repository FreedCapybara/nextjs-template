import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  loadingCount: 0
};

// extraReducers matchers
function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

function isCompletedAction(action) {
  return action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected');
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearState: (state, action) => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPendingAction, (state, action) => {
        // increment loading when starting a request
        state.loadingCount++;
      })
      .addMatcher(isCompletedAction, (state, action) => {
        // decrement loading when a request finishes
        state.loadingCount = Math.max(0, state.loadingCount - 1);
      })
  }
});

export const {
  setLoading,
  clearState
} = appSlice.actions;

export const selectLoading = createSelector(
  (state) => state.loadingCount,
  (loadingCount) => loadingCount > 0
);

export default appSlice.reducer;

