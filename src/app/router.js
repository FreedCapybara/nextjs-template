import Router from 'next/router';
import cookie from 'cookie';
import _ from 'lodash';

const restrictedRoutes = [
  '^/home$',
  '^/account$',
  '^/account/edit-profile$'
];

function isRestrictedRoute(url) {
  return _.find(restrictedRoutes, (pattern) => url.match(pattern));
}

export function createRedirect(res, location) {
  res.writeHead(302, {
    Location: location
  });
  res.end();
}

export function serverRedirect(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');

  const isAuthenticated = !!cookies.token;
  if (!isAuthenticated && isRestrictedRoute(req.url)) {
    // See https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
    createRedirect(res, `/login?redirect=${encodeURIComponent(req.url)}`);
    return true;
  }

  return false; // did not redirect
}

function clientRedirect(url) {
  const cookies = cookie.parse(document.cookie || '');

  const isAuthenticated = !!cookies.token;
  if (!isAuthenticated && isRestrictedRoute(url)) {
    window.location.replace(`/login?redirect=${encodeURIComponent(url)}`);
    return true;
  }

  return false; // did not redirect
}

function configureRouter() {
  Router.events.on('routeChangeStart', clientRedirect);
}

// stuff from the http config

import Cookies from 'js-cookie';

function universalRedirect(res, location) {
  if (res) {
    createRedirect(res, location);
  } else {
    Router.push(location);
  }
}

export function configureHttp(req, res, http) {
  http.configure((client) => {
    client.defaults.baseUrl = apiBaseUrl;

    client.defaults.interceptors[404] = () => {
      universalRedirect(res, '/not-found');
    };

    client.defaults.interceptors[401] = () => {
      if (!req) {
        Cookies.remove('token');
      }
      universalRedirect(res, '/login');
    };

    client.defaults.interceptors[403] = () => {
      if (!req) {
        Cookies.remove('token');
      }
      universalRedirect(res, '/login');
    };

    client.defaults.interceptors[500] = () => {
      universalRedirect(res, '/server-error');
    };

    client.onFail = () => {
      universalRedirect(res, '/server-error');
    };

    client.defaults.headers['Content-Type'] = 'application/json';

    // fix Node "unable to verify the first certificate" errors in dev
    if (dev && req) {
      const https = require("https");
      client.defaults.options['agent'] = new https.Agent({ rejectUnauthorized: false });
    }

    // set auth header from the token cookie
    const cookieSource = req ? req.headers.cookie : document.cookie;
    const cookies = cookie.parse(cookieSource || '');
    const token = cookies.token;

    if (token) {
      client.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete client.defaults.headers['Authorization'];
    }
  });
}
export default configureRouter;

