import { http } from '@lib/http';

export const authApi = {
  login: (credentials) => http.post(`/auth/login`, credentials),
  register: (credentials) => http.post(`/auth/register`, credentials),
  logout: () => http.post(`/auth/logout`),
  getUser: () => http.get(`/auth/user`)
};

