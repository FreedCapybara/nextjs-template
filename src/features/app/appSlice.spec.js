import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  loadingCount: 0,
  modalOpen: false,
  modalTitle: '',
  modalContent: null,
  error: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppError: (state, action) => {
      state.error = action.payload;
    },
    showModal: (state, action) => {
      state.modalOpen = true;
      state.modalTitle = action.payload.modalTitle;
      state.modalContent = action.payload.modalContent;
    },
    hideModal: (state) => {
      state.modalOpen = false;
      state.modalTitle = initialState.modalTitle;
      state.modalContent = initialState.modalContent;
    },
    setAppLoading: (state, action) => {
      const loadingCount = Math.max(0, state.loadingCount + (action.payload ? 1 : -1));
      state.loadingCount = loadingCount;
    },
    clearState: (state, action) => {
      return initialState;
    }
  }
});

export const {
  setAppError,
  showModal,
  hideModal,
  setAppLoading,
  clearState
} = appSlice.actions;

export const selectLoading = createSelector(
  (state) => state.loadingCount,
  (loadingCount) => loadingCount > 0
);

export default appSlice.reducer;

