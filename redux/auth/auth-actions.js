
export const authActions = {
  login: (credentials) => ({ type: 'LOGIN_SAGA', credentials }),
  register: (credentials) => ({ type: 'REGISTER_SAGA', credentials }),
  logout: () => ({ type: 'LOGOUT_SAGA' }),
  getUser: () => ({ type: 'GET_USER_SAGA' }),
  updateProfile: (profile) => ({ type: 'UPDATE_PROFILE_SAGA', profile }),
  forgotPassword: (model) => ({ type: 'FORGOT_PASSWORD_SAGA', model }),
  resetPassword: (model) => ({ type: 'RESET_PASSWORD_SAGA', model }),

  setUser: (user) => ({ type: 'SET_USER', user }),
  setAuthError: (authError) => ({ type: 'AUTH_ERROR', authError })
};

