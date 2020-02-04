
export const appActions = {
  setLoading: (loading) => ({ type: 'SET_APP_LOADING', loading }),
  showModal: (modalTitle, modalContent) => ({ type: 'SHOW_MODAL', modalTitle, modalContent }),
  hideModal: () => ({ type: 'HIDE_MODAL' }),
  setError: (error) => ({ type: 'SET_APP_ERROR', error })
};

