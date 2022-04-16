import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { createSelector } from 'reselect';
import { HYDRATE } from 'next-redux-wrapper';
import cookie from 'cookie';
import { intersection, isEmpty, some } from 'lodash-es';
//import { } from './authAPI';

import { jwtUtils } from '@utils/jwt';

const initialState = {
  user: {
    email: '',
    roles: []
  }
};

const rolesClaim = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

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

  const jwt = jwtUtils.parseJwt(token);

  const user = {
    email: jwt.sub,
    roles: jwt[rolesClaim] || []
  }

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
  const { req, res } = ssrContext;

  dispatch(clearState());

  const originalUrl = encodeURIComponent(req.url);
  const redirect = `/login?redirect=${originalUrl}`;

  return createAuthResult(false, null, redirect);
};

// Utility function for consistent return values.
// Provides a `serverSideProps` key as an easy return value for `getServerSideProps()`.
function createAuthResult(authorized, user, redirect) {

  const serverSideProps = authorized ? {
    props: {
      user
    }
  } : {
    redirect: {
      destination: redirect
    }
  }

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

