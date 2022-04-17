import cookie from 'cookie';

import { nextjsUtils } from '@utils/nextjs';

import { userUnauthorized } from '@features/auth';

export function createDefaultHttpOptions(url, method, body, ssrContext) {
  const { req } = ssrContext || {};
  const dev = process.env.NODE_ENV !== 'production';
  const options = {
    headers: {}
  };

  // application/json by default
  options.headers['Content-Type'] = 'application/json';

  // set auth header from the token cookie
  const cookieSource = req ? req.headers.cookie : document.cookie;
  const cookies = cookie.parse(cookieSource || '');
  const token = cookies.token;

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  // fix Node "unable to verify the first certificate" errors during SSR in dev
  if (dev && req) {
    const https = require('https');
    options['agent'] = new https.Agent({ rejectUnauthorized: false });
  }

  // remove Content-Type for file uploads
  if (typeof(window) !== 'undefined' && body instanceof FormData) {
    delete options.headers['Content-Type'];
  }

  return options;
}

export async function defaultResponseHandler(response, ssrContext, thunkAPI) {
  const { dispatch } = thunkAPI;
  const ok = response.ok;
  const status = response.status;

  const result = {
    ok,
    status,
    data: null,
    redirect: null,
    message: null,
    serverSideProps: null
  };

  // 200 ok - return the data
  if (ok) {
    result.data = await response.json();
    result.serverSideProps = nextjsUtils.createServerSideProps(result.data, null);
    return result;
  }

  // redirect to login for 401 unauthorized or 403 forbidden responses
  if (status === 401 || status === 403) {
    const authResult = dispatch(userUnauthorized(ssrContext))
    result.message = 'Unauthorized';
    result.redirect = authResult.redirect;
    result.serverSideProps = authResult.serverSideProps;
  }

  // redirect to the 404 page for 404 not found responses
  if (status === 404) {
    result.message = 'Not found';
    result.redirect = '/not-found';
    result.serverSideProps = nextjsUtils.createServerSideProps(null, result.redirect);
  }

  // redirect to the server error page and include the response text in the result
  // for 400 bad request and 500 internal server error responses
  if (status === 400 || status === 500) {
    result.message = await response.text();
    result.redirect = '/server-error';
    result.serverSideProps = nextjsUtils.createServerSideProps(null, result.redirect);
  }

  // perform client-side redirects
  if (!ssrContext && result.redirect) {
    // not very sexy, but it's for an error condition /shrug
    window.location.href = result.redirect;
  }

  return result;
}

