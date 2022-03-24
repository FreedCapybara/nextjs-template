
export const appInitialState = {
  loading: false,
  loadingCount: 0,
  modalOpen: false,
  modalTitle: '',
  modalContent: null,
  error: false
};

export function appReducer(state = appInitialState, action) {

  switch (action.type) {
    case 'SET_APP_ERROR': return {
        ...state,
        ...{
          error: action.error
        }
      };

    case 'SHOW_MODAL': return {
        ...state,
        ...{
          modalOpen: true,
          modalTitle: action.modalTitle,
          modalContent: action.modalContent
        }
      };

    case 'HIDE_MODAL': return {
        ...state,
        ...{
          modalOpen: false,
          modalTitle: '',
          modalContent: null
        }
      };

    case 'SET_APP_LOADING': {
      const loadingCount = Math.max(0, state.loadingCount + (action.loading ? 1 : -1));
      return {
        ...state,
        ...{
          loadingCount,
          loading: loadingCount > 0
        }
      };
    }

    case 'CLEAR_STATE':
      return appInitialState;

    default:
      return state;
  }
}

