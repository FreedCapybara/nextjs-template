import { http } from '@lib/http';

export const authApi = {
  login: (credentials) => http.post(`/api/auth/login`, credentials),
  logout: () => http.post(`/api/auth/logout`),
  getUser: () => http.get(`/api/auth/user`)
};

