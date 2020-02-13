import { Http } from '@lib/http';
import Router from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';

import { createRedirect } from '@config/router-config';

const dev = process.env.NODE_ENV !== 'production';
const apiBaseUrl = process.env.API_BASE_URL || (dev ? 'https://localhost:3000' : 'https://prod-url');

function universalRedirect(res, location) {
  if (res) {
    createRedirect(res, location);
  } else {
    Router.push(location);
  }
}

function configureHttp(req, res) {
  // Configure the http client.
  // Http.configure will run once, which is good for performing generic setup,
  // but don't use it for authentication, or the server will configure the same token for all requests!
  // Use Http.setAuth() instead (below).
  Http.configure((client) => {
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
    // (prod should be fine because it'll have a real SSL cert)
    if (dev && req) {
      const https = require("https");
      client.defaults.options['agent'] = new https.Agent({ rejectUnauthorized: false });
    }
  });

  // Configure auth.
  // This will run once per server request and once on client load.
  Http.setAuth((client) => {
    // set auth header from the token cookie
    const cookieSource = req ? (req.headers.cookie || '') : document.cookie;
    const cookies = cookie.parse(cookieSource);
    const token = cookies.token;

    if (token) {
      client.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete client.defaults.headers['Authorization'];
    }
  });
}

export default configureHttp;

