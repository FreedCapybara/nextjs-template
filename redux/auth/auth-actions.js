
export const authActions = {
  login: (credentials, redirect) => ({ type: 'LOGIN_SAGA', credentials, redirect }),
  register: (credentials, redirect) => ({ type: 'REGISTER_SAGA', credentials, redirect }),
  logout: () => ({ type: 'LOGOUT_SAGA' }),
  checkUsername: (username) => ({ type: 'CHECK_USERNAME_SAGA', username }),
  getUser: () => ({ type: 'GET_USER_SAGA' }),
  getUserActivity: () => ({ type: 'GET_USER_ACTIVITY_SAGA' }),
  forgotPassword: (model) => ({ type: 'FORGOT_PASSWORD_SAGA', model }),
  resetPassword: (model) => ({ type: 'RESET_PASSWORD_SAGA', model }),
  changePassword: (model) => ({ type: 'CHANGE_PASSWORD_SAGA', model }),

  setUser: (user) => ({ type: 'SET_USER', user }),
  setUserActivity: (userActivity) => ({ type: 'SET_USER_ACTIVITY', userActivity }),
  setAuthResult: (authResult) => ({ type: 'SET_AUTH_RESULT', authResult }),
  setAuthError: (authError) => ({ type: 'AUTH_ERROR', authError })
};

