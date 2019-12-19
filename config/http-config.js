import { Http } from '@lib/http';
import Router from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';

const apiBaseUrl = process.env.API_BASE_URL || 'https://localhost:44341';
const dev = process.env.NODE_ENV !== 'production';

function configureHttp(req) {
  // configure the http client
  Http.configure((client) => {
    client.defaults.baseUrl = apiBaseUrl;

    if (!req) {
      // router stuff is client-only
      client.defaults.interceptors[404] = () => {
        Router.push('/not-found');
      };

      client.defaults.interceptors[401] = () => {
        Cookies.remove('token');
        Router.push('/login');
      };

      client.defaults.interceptors[403] = () => {
        Cookies.remove('token');
        Router.push('/login');
      };

      client.defaults.interceptors[500] = () => {
        Router.push('/server-error');
      };
    }

    client.defaults.headers['Content-Type'] = 'application/json';

    // set auth header from the token cookie
    const cookieSource = req ? (req.headers.cookie || '') : document.cookie;
    const cookies = cookie.parse(cookieSource);
    const token = cookies.token;

    if (token) {
      client.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    // fix Node "unable to verify the first certificate" errors in dev
    // (prod should be fine because it'll have a real SSL cert)
    if (dev && req) {
      const https = require("https");
      client.defaults.options['agent'] = new https.Agent({ rejectUnauthorized: false });
    }
  });
}

export default configureHttp;

