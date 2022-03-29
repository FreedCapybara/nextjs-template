import { http } from '@utils/http';

export const authApi = {
  login: (credentials) => http.post(`/auth/login`, credentials),
  register: (credentials) => http.post(`/auth/register`, credentials),
  logout: () => http.post(`/auth/logout`),
  checkUsername: (username) => http.post(`/auth/check-username`, { username }),
  getUser: () => http.get(`/auth/user`),
  getUserActivity: () => http.get(`/tracking/activity/user`),
  forgotPassword: (model) => http.post(`/auth/forgotpassword`, model),
  resetPassword: (model) => http.post(`/auth/setpassword`, model),
  changePassword: (model) => http.post(`/auth/changepassword`, model)
};

