
export const authActions = {
  login: (credentials) => ({ type: 'LOGIN_SAGA', credentials }),
  setUser: (user) => ({ type: 'SET_USER', user }),
  setError: (error) => ({ type: 'AUTH_ERROR', error })
};

