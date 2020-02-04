
export const appInitialState = {
  loading: false,
  showModal: false,
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
          showModal: true,
          modalTitle: action.modalTitle,
          modalContent: action.modalContent
        }
      };

    case 'HIDE_MODAL': return {
        ...state,
        ...{
          showModal: false,
          modalTitle: '',
          modalContent: null
        }
      };

    case 'SET_APP_LOADING': return {
        ...state,
        ...{
          loading: action.loading
        }
      };

    default:
      return state;
  }
}

