import Router from 'next/router';
import cookie from 'cookie';
import _ from 'lodash';

const authenticatedRoutes = [
];

function isRestrictedRoute(url) {
  return _.find(authenticatedRoutes, (pattern) => url.match(pattern));
}

export function serverRedirect(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const isAuthenticated = !!cookies.token;
  const shouldRedirect = !isAuthenticated && isRestrictedRoute(req.url);
  if (shouldRedirect) {
    // See https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
    res.writeHead(302, {
      Location: '/login'
    });
    res.end();
  }
  return shouldRedirect;
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

