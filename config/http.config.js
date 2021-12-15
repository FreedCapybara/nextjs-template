import { Http } from '@lib/http';
import Router from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';
import getConfig from 'next/config';

import { createRedirect } from '@config/router-config';

const dev = process.env.NODE_ENV !== 'production';
const apiBaseUrl = getConfig().publicRuntimeConfig.apiBaseUrl;

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
  //
  // Commentary:
  // This was in response to a bug where the server still believed the user was logged in after logging out,
  // caused by the Authorization header being set globally.
  // I couldn't find a good answer on the Internets for whether or not the server would get tripped up by concurrent requests,
  // so I verified that the server loads the correct user every time by running the following script
  // in two browser consoles logged in as different users:
  //
  // const otherUser = 'user2@user.com';
  // console.log('started');
  // for (let i = 0; i < 1000; i++) {
  //   fetch('http://localhost:3000', { credentials: 'include' })
  //       .then(async (response) => {
  //           const text = await response.text();
  //           if (_.includes(text, otherUser)) {
  //               throw 'found the other user';
  //           }
  //           if (i === 999) {
  //               console.log('done');
  //           }
  //       });
  // }
  //
  // It never threw the error in either console, and there must have been some parallel requests, so I'm calling it good.
  // I verified that I would actually see the error if it threw by making it look for the user logged into the browser window (I got 1000 console errors).
  Http.setAuth((client) => {
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

export default configureHttp;

