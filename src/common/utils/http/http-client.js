import { createDefaultHttpOptions } from '@app/http';

export const http = {
  request,
  get,
  post,
  put,
  patch,
  $delete
}

function request(url, method, body, options, ssrContext) {
  const requestUrl = process.env.NEXT_PUBLIC_API_BASE_URL + url;

  const defaultOptions = createDefaultHttpOptions(url, method, body, ssrContext);

  const requestOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...(options || {}).headers
    },
    method,
    body
  };

  return fetch(requestUrl, requestOptions);
}

function get(url, options, ssrContext) {
  return http.request(url, 'GET', undefined, options, ssrContext);
}

function post(url, body, options, ssrContext) {
  return http.request(url, 'POST', JSON.stringify(body), options, ssrContext);
}

function put(url, body, options, ssrContext) {
  return http.request(url, 'PUT', JSON.stringify(body), options, ssrContext);
}

function patch(url, body, options, ssrContext) {
  return http.request(url, 'PATCH', JSON.stringify(body), options, ssrContext);
}

function $delete(url, options, ssrContext) {
  return http.request(url, 'DELETE', undefined, options, ssrContext);
}

