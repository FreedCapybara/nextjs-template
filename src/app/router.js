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

export default configureRouter;

