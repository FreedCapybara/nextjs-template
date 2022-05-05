import { nextjsUtils } from '@utils/nextjs';

import { userUnauthorized } from '@features/auth';

// Use this to configure options for HTTP requests.
// You can use this to add default headers, handle authentication, and more!
// It should return an options object that can be used with the fetch API.
export function createDefaultHttpOptions(url, method, body, ssrContext) {
  const { req } = ssrContext || {};
  const dev = process.env.NODE_ENV !== 'production';
  const options = {
    headers: {}
  };

  // application/json by default
  options.headers['Content-Type'] = 'application/json';

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

// Use this in data-fetching thunks to provide consistent error response handling
// and reduce verbosity in getServerSideProps by returning myThunkResult.payload.serverSideProps.
// Example usage:
//
// export const exampleRequest = createAsyncThunk(
//   'example/exampleRequest',
//   async ({ context }, thunkAPI) => {
//     const response = await exampleAPI.exampleRequest(context);
//     return await defaultResponseHandler(response, thunkAPI, context);
//   }
// );
//
// then in getServerSideProps:
//
// export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
//   const { dispatch } = store;
//   const dataResult = await dispatch(exampleRequest({ context }));
//   return dataResult.payload.serverSideProps;
// });
//
// Note that since 401/403 responses for unauthorized requests are handled here,
// you do not need to dispatch `authorize(context)` in getServerSideProps if dispatching a thunk that uses this function.
export async function defaultResponseHandler(response, thunkAPI, ssrContext) {
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

