import fetch from 'isomorphic-unfetch';

// Not super sure about isomorphic-unfetch,
// so this wrapper class
//
//   (1) decouples the app from any specific library
//   (2) provides some features missing from isomorphic-unfetch
//       (base urls, default headers, interceptors)
//
// Should be easy enough to switch to axios or something else if desired.
export class Http {

  defaults = {
    baseUrl: '',
    headers: {},
    interceptors: {} // 404: (response) => {}
  };

  requestFn = fetch;

  setBaseUrl(baseUrl) {
    this.defaults.baseUrl = baseUrl;
  }

  addHeader(key, value) {
    this.defaults.headers[key] = value;
  }

  addInterceptor(statusCode, callback) {
    this.defaults.interceptors[statusCode] = callback;
  }

  get(url, options) {
    return this.request(url, 'GET', undefined, options);
  }

  post(url, body, options) {
    return this.request(url, 'POST', JSON.stringify(body), options);
  }

  put(url, body, options) {
    return this.request(url, 'PUT', JSON.stringify(body), options);
  }

  patch(url, body, options) {
    return this.request(url, 'PATCH', JSON.stringify(body), options);
  }

  delete(url, options) {
    return this.request(url, 'DELETE', undefined, options);
  }

  request(url, method, body, options) {
    url = this.defaults.baseUrl + url;

    options = {
      ...options,
      method,
      body
    };

    options.headers = {
      ...this.defaults.headers,
      ...options.headers
    };

    return new Promise((resolve, reject) => {
      this.requestFn(url, options)
        .then(response => {
          const interceptor = this.defaults.interceptors[response.status];
          if (interceptor) {
            interceptor(response);
          }

          resolve(response.json());
        });
    });
  }
}

export const http = new Http();

