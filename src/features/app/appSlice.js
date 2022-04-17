import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const dev = process.env.NODE_ENV !== 'production';

const initialState = {
  loadingCount: 0
};

// extraReducers matchers
function pendingActionMatcher(action) {
  return action.type.endsWith('/pending');
}

function completedActionMatcher(action) {
  return action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected');
}

function rejectedActionMatcher(action) {
  return action.type.endsWith('/rejected');
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(pendingActionMatcher, (state, action) => {
        // increment loading when starting a request
        state.loadingCount++;
      })
      .addMatcher(completedActionMatcher, (state, action) => {
        // decrement loading when a request finishes
        state.loadingCount = Math.max(0, state.loadingCount - 1);
      })
      .addMatcher(rejectedActionMatcher, (state, action) => {
        if (dev) {
          // this is a side effect and therefore not in line with the style guide,
          // but otherwise runtime errors that occur in thunks tend to be silent
          console.error(action.error);
        }
      });
  }
});

export const selectLoading = createSelector(
  (state) => state.app.loadingCount,
  (loadingCount) => loadingCount > 0
);

export const appReducer = appSlice.reducer;

