import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  loadingCount: 0,
  modalOpen: false,
  error: false
};

// need to be able to navigate from Redux(?)
// need to be able to create modals and stuff from Redux(?)

// on modals, could have a thunk(?) with something like this https://github.com/GA-MO/react-confirm-alert/blob/master/src/index.js#L170-L175
// with the modal component passed as content:
//
// React.render(<Modal>{action.payload.ModalContent}</Modal>, modalTarget);
//
// then modals could be written as components rather than a title+content arguments to a function,
// but you could still call it like openModal(MyModalCompenent, modalProps)
//
// does it make sense to have that connected to Redux in any way?
// doesn't really seem like it, but not sure where else you're supposed to put that kind of thing -- common/utils/modal?
// would possibly violate "reducers should not have side effects" -- does this apply to thunks? https://redux.js.org/style-guide/style-guide#reducers-must-not-have-side-effects
//
// what could be sweet would be to have the modal function return a promise somehow, with the resolve/reject functions passed to the modal component as props
// then you could probably use the modal in a thunk and get a result from it
//
// Maybe that's this thing https://github.com/alexn400/async-modals
// but then how would you open the modal in a thunk?

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppError: (state, action) => {
      state.error = action.payload;
    },
    showModal: (state, action) => {
      state.modalOpen = true;
    },
    hideModal: (state) => {
      state.modalOpen = false;
    },
    setAppLoading: (state, action) => {
      state.loadingCount = Math.max(0, state.loadingCount + (action.payload ? 1 : -1));
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

