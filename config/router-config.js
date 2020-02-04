import Router from 'next/router';
import cookie from 'cookie';
import _ from 'lodash';

const authenticatedRoutes = [
  '^((?!(/login|/server-error|/not-found|/create-account)).)*$'
];

function isRestrictedRoute(url, routes) {
  return _.find((routes || authenticatedRoutes), (pattern) => url.match(pattern));
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
    createRedirect(res, '/login');
    return true;
  }

  return false; // did not redirect
}

function clientRedirect(url) {
  const cookies = cookie.parse(document.cookie || '');

  const isAuthenticated = !!cookies.token;
  if (!isAuthenticated && isRestrictedRoute(url)) {
    window.location.replace('/login');
  }
}

function configureRouter() {
  Router.events.on('routeChangeStart', clientRedirect);
}

export default configureRouter;

