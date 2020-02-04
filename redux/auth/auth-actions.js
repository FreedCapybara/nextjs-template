
export const authActions = {
  login: (credentials) => ({ type: 'LOGIN_SAGA', credentials }),
  register: (credentials) => ({ type: 'REGISTER_SAGA', credentials }),
  logout: () => ({ type: 'LOGOUT_SAGA' }),
  getUser: () => ({ type: 'GET_USER_SAGA' }),

  setUser: (user) => ({ type: 'SET_USER', user }),
  setAuthError: (authError) => ({ type: 'AUTH_ERROR', authError })
};

