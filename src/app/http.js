import { Http } from '@utils/http';
import Router from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';
import getConfig from 'next/config';

import { createRedirect } from '@app/router';

const dev = process.env.NODE_ENV !== 'production';
const apiBaseUrl = getConfig().publicRuntimeConfig.apiBaseUrl;

export const http = new Http();

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
    // (prod should be fine because it'll have a real SSL cert)
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

