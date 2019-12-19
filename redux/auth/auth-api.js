import { http } from '@lib/http';

export const authApi = {
  login: (credentials) => http.post(`/api/auth/login`, credentials)
};

