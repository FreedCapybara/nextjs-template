import { http } from '@lib/http';
import { authApi } from '@redux/auth/auth-api';

describe('Auth api', () => {

  it('should login', () => {
    let spy = spyOn(http, 'post');
    authApi.login({});
    expect(spy).toHaveBeenCalledWith(`/api/auth/login`, {});
  });

  it('should logout', () => {
    let spy = spyOn(http, 'post');
    authApi.logout();
    expect(spy).toHaveBeenCalledWith(`/api/auth/logout`);
  });

  it('should getUser', () => {
    let spy = spyOn(http, 'get');
    authApi.getUser();
    expect(spy).toHaveBeenCalledWith(`/api/auth/user`);
  });
});
