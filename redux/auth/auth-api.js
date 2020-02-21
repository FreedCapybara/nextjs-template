import { http } from '@lib/http';

export const authApi = {
  login: (credentials) => http.post(`/auth/login`, credentials),
  register: (credentials) => http.post(`/auth/register`, credentials),
  logout: () => http.post(`/auth/logout`),
  getUser: () => http.get(`/auth/user`),
  updateProfile: (profile) => http.post(`/api/auth/profile`, profile),
  forgotPassword: (model) => http.post(`/api/auth/forgotpassword`, model),
  resetPassword: (model) => http.post(`/api/auth/setpassword`, model)
};

