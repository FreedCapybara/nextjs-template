import { http } from '@utils/http';

export const authAPI = {
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
  changePassword
};

function login(email, password) {
  const data = {
    email,
    password
  };
  http.post('/auth/login', data);
}

function register(email, password) {
  const data = {
    email,
    password
  };
  http.post('/auth/register', data);
}

function logout() {
  http.post(`/auth/logout`);
}

function forgotPassword(email) {
  const data = {
    email
  };
  http.post('/auth/forgotpassword', data);
}

function resetPassword(email, token, newPassword) {
  const data = {
    email,
    token,
    newPassword
  };
  http.post('/auth/setpassword', data);
}

function changePassword(email, currentPassword, newPassword) {
  const data = {
    email,
    currentPassword,
    newPassword
  };
  http.post('/auth/changepassword', data);
}

