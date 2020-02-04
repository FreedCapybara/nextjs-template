import Cookies from 'js-cookie';
import moment from 'moment';

import { http } from '../../lib/http';

import { apiBaseUrl } from './config';

export function login(credentials) {
  const url = `${apiBaseUrl}/auth/login`;
  const body = credentials || {
    email: 'e2e@test.com',
    password: 'e2eTestingUser9000!!!'
  };
  cy.request('POST', url, body)
    .its('body')
    .then((data) => {
      const expires = moment(data.expires).diff(moment(), 'days', true);
      Cookies.set('token', data.token, { expires });
      http.defaults.headers['Authorization'] = `Bearer ${data.token}`;

      Cookies.set('organization', '1');
      http.defaults.headers['Organization'] = '1';
    });
}

