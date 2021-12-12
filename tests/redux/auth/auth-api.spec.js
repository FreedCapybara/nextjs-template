import { http } from '@lib/http';
import { authApi } from '@redux/auth/auth-api';

describe('Auth api', () => {

  it('should login', () => {
    let spy = jest.spyOn(http, 'post');
    authApi.login({});
    expect(spy).toHaveBeenCalledWith(`/auth/login`, {});
  });

  it('should register', () => {
    let spy = jest.spyOn(http, 'post');
    authApi.register({});
    expect(spy).toHaveBeenCalledWith(`/auth/register`, {});
  });

  it('should logout', () => {
    let spy = jest.spyOn(http, 'post');
    authApi.logout();
    expect(spy).toHaveBeenCalledWith(`/auth/logout`);
  });

  it('should getUser', () => {
    let spy = jest.spyOn(http, 'get');
    authApi.getUser();
    expect(spy).toHaveBeenCalledWith(`/auth/user`);
  });

  it('should updateProfile', () => {
    let spy = jest.spyOn(http, 'post');
    authApi.updateProfile({});
    expect(spy).toHaveBeenCalledWith(`/auth/profile`, {});
  });

  it('should forgotPassword', () => {
    let spy = jest.spyOn(http, 'post');
    authApi.forgotPassword({});
    expect(spy).toHaveBeenCalledWith(`/auth/forgotpassword`, {});
  });

  it('should resetPassword', () => {
    let spy = jest.spyOn(http, 'post');
    authApi.resetPassword({});
    expect(spy).toHaveBeenCalledWith(`/auth/setpassword`, {});
  });
});
