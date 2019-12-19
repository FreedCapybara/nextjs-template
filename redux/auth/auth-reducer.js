
export const authInitialState = {
  user: {},
  error: false
};

export function authReducer(state = authInitialState, action) {

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...{
          user: action.user
        }
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        ...{
          error: action.error
        }
      };

    default:
      return state;
  }
}

