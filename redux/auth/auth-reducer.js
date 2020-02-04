
export const authInitialState = {
  user: {},
  authError: false
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
          authError: action.authError
        }
      };

    default:
      return state;
  }
}

