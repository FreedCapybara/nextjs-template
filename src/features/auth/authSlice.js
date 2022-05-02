import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { createSelector } from 'reselect';
import { HYDRATE } from 'next-redux-wrapper';
import cookie from 'cookie';
import Cookies from 'js-cookie';
import { intersection, isEmpty, some } from 'lodash-es';
import { authAPI } from './authAPI';

import { defaultResponseHandler } from '@app/http';

import { jwtUtils } from '@utils/jwt';
import { nextjsUtils } from '@utils/nextjs';

const initialState = {
  user: {
    email: '',
    roles: []
  }
};

const rolesClaim = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const response = await authAPI.login(email, password);
    const loginResult = await defaultResponseHandler(response, thunkAPI);

    if (loginResult.data?.token) {
      dispatch(userAuthenticated(loginResult))

      // return an auth result with a redirect to the home page
      return createAuthResult(true, user, '/');
    }

    // indicate there was an error
    return createAuthResult(false, null, null);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const response = await authAPI.register(email, password);
    const loginResult = await defaultResponseHandler(response, thunkAPI);

    if (loginResult.data?.token) {
      dispatch(userAuthenticated(loginResult))

      // return an auth result with a redirect to the home page
      return createAuthResult(true, user, '/');
    }

    // indicate there was an error
    return createAuthResult(false, null, null);
  }
);

// Handles successful authentication from login or registration
export const userAuthenticated = (loginResult) => (dispatch) => {
  // set the token
  dispatch(setToken(loginResult.data));

  // get user information
  const user = getUserFromJwt(token);
  dispatch(userAuthorized(user));
};

export const setToken = (user) => (dispatch) => {
  // set the cookie
  const cookieOptions = {
    secure: true
  };
  Cookies.set('token', data.token, cookieOptions);
};

// Dispatch this in `getServerSideProps` to load basic user information from the token,
// or redirect unauthorized users to login. Example:
//
// export const getServerSideProps = wrapper.getServerSideProps((store) => (context) => {
//   const { dispatch } = store;
//   const authResult = dispatch(authorize(context, ['admin'])); // roles optional
//   return authResult.serverSideProps;
// });
//
export const authorize = (ssrContext, roles) => (dispatch) => {
  const { req } = ssrContext;

  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.token;

  if (!token) {
    return dispatch(userUnauthorized(ssrContext));
  }

  const user = getUserFromJwt(token);

  if (some(roles) && isEmpty(intersection(roles, user.roles))) {
    return dispatch(userUnauthorized(ssrContext));
  }

  return dispatch(userAuthorized(user));
};

// Handles valid/authorized users and returns an auth result with user information.
export const userAuthorized = (user) => (dispatch) => {
  dispatch(userLoaded(user));
  return createAuthResult(true, user, null);
};

// Handles invalid/unauthorized users and returns an auth result with redirect information.
export const userUnauthorized = (ssrContext) => (dispatch) => {
  const { req } = ssrContext || {};

  dispatch(clearState());

  const redirect = req ?
    `/login?redirect=${encodeURIComponent(req.url)}` :
    `/login?redirect=${encodeURIComponent(window.location.href.replace(window.location.origin, ''))}`;
  return createAuthResult(false, null, redirect);
};

function getUserFromJwt(token) {
  const jwt = jwtUtils.parseJwt(token);

  const user = {
    email: jwt.sub,
    roles: jwt[rolesClaim] || []
  };

  return user;
}

// Utility function for consistent return values.
// Provides a `serverSideProps` key as an easy return value for `getServerSideProps()`.
function createAuthResult(authorized, user, redirect) {
  const serverSideProps = nextjsUtils.createServerSideProps(user, redirect);
  return {
    authorized,
    user,
    redirect,
    serverSideProps
  };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      state.user.email = action.payload.email || '';
      state.user.roles = action.payload.roles || [];
    },
    clearState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        state.user = action.payload.auth.user;
      });
  }
});

export const {
  userLoaded,
  clearState
} = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export const authReducer = authSlice.reducer;

