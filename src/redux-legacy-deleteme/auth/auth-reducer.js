
export const authInitialState = {
  user: {},
  userActivity: [],
  authResult: {}, // generic object for auth stuff
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

    case 'SET_USER_ACTIVITY':
      return {
        ...state,
        ...{
          userActivity: action.userActivity
        }
      };

    case 'SET_AUTH_RESULT':
      return {
        ...state,
        ...{
          authResult: action.authResult
        }
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        ...{
          authError: action.authError
        }
      };

    case 'CLEAR_STATE':
      return authInitialState;

    default:
      return state;
  }
}

