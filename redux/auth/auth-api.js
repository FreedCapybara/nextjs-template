import { http } from '@lib/http';

export const authApi = {
  login: (credentials) => http.post(`/auth/login`, credentials),
  register: (credentials) => http.post(`/auth/register`, credentials),
  logout: () => http.post(`/auth/logout`),
  getUser: () => http.get(`/auth/user`),
  updateProfile: (profile) => http.post(`/auth/profile`, profile),
  forgotPassword: (model) => http.post(`/auth/forgotpassword`, model),
  resetPassword: (model) => http.post(`/auth/setpassword`, model)
};

