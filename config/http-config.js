import { Http } from '@lib/http';
import cookie from 'cookie';
import Router from 'next/router';

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000';

function configureHttp(req) {
  // configure the http client
  Http.configure((client) => {
    client.defaults.baseUrl = apiBaseUrl;

    client.defaults.interceptors[404] = () => {
      Router.push('/not-found');
    };

    client.defaults.interceptors[401] = () => {
      Router.push('/login');
    };

    client.defaults.interceptors[500] = () => {
      Router.push('/error');
    };

    // set auth header from the token cookie
    const cookieSource = req ? (req.headers.cookie || '') : document.cookie;
    const cookies = cookie.parse(cookieSource);
    const token = cookies.token;

    if (token) {
      client.addHeader('Authorization', `Bearer ${token}`);
    }
  });
}

export default configureHttp;

