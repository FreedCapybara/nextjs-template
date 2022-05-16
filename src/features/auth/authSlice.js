import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { getSession } from 'next-auth/react';
import { intersection, isEmpty, some } from 'lodash-es';
import { authAPI } from './authAPI';

import { defaultResponseHandler } from '@app/http';

import { nextjsUtils } from '@utils/nextjs';

const initialState = {
  user: {
    email: '',
    roles: []
  }
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
export const authorize = (ssrContext, roles) => async (dispatch) => {
  const { req } = ssrContext;

  const session = await getSession(ssrContext);

  if (!session) {
    return dispatch(userUnauthorized(ssrContext));
  }

  const user = session.user;
  const userRoles = user.roles;

  if (some(roles) && isEmpty(intersection(roles, userRoles))) {
    return dispatch(userUnauthorized(ssrContext));
  }

  return dispatch(userAuthorized(session));
};

// Handles valid/authorized users and returns an auth result with user information.
export const userAuthorized = (session) => (dispatch) => {
  dispatch(userLoaded(session.user));
  return createAuthResult(true, session, null);
};

// Handles invalid/unauthorized users and returns an auth result with redirect information.
export const userUnauthorized = (ssrContext) => (dispatch) => {
  const { req } = ssrContext || {};

  dispatch(clearState());

  const redirect = req ?
    `/login?callbackUrl=${encodeURIComponent(req.url)}` :
    `/login?callbackUrl=${encodeURIComponent(window.location.href.replace(window.location.origin, ''))}`;
  return createAuthResult(false, null, redirect);
};

// Utility function for consistent return values.
// Provides a `serverSideProps` key as an easy return value for `getServerSideProps()`.
function createAuthResult(authorized, session, redirect) {
  const user = session?.user;
  const props = {
    session
  };
  const serverSideProps = redirect ?
    nextjsUtils.createRedirect(redirect) :
    nextjsUtils.createServerSideProps(props, { spread: true });

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

