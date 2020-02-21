import { http } from '@lib/http';
import { authApi } from '@redux/auth/auth-api';

describe('Auth api', () => {

  it('should login', () => {
    let spy = spyOn(http, 'post');
    authApi.login({});
    expect(spy).toHaveBeenCalledWith(`/auth/login`, {});
  });

  it('should register', () => {
    let spy = spyOn(http, 'post');
    authApi.register({});
    expect(spy).toHaveBeenCalledWith(`/auth/register`, {});
  });

  it('should logout', () => {
    let spy = spyOn(http, 'post');
    authApi.logout();
    expect(spy).toHaveBeenCalledWith(`/auth/logout`);
  });

  it('should getUser', () => {
    let spy = spyOn(http, 'get');
    authApi.getUser();
    expect(spy).toHaveBeenCalledWith(`/auth/user`);
  });

  it('should updateProfile', () => {
    let spy = spyOn(http, 'post');
    authApi.updateProfile({});
    expect(spy).toHaveBeenCalledWith(`/api/auth/profile`, {});
  });

  it('should forgotPassword', () => {
    let spy = spyOn(http, 'post');
    authApi.forgotPassword({});
    expect(spy).toHaveBeenCalledWith(`/api/auth/forgotpassword`, {});
  });

  it('should resetPassword', () => {
    let spy = spyOn(http, 'post');
    authApi.resetPassword({});
    expect(spy).toHaveBeenCalledWith(`/api/auth/setpassword`, {});
  });
});
