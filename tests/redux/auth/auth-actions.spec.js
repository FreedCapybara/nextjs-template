import { authActions } from '@redux/actions';

describe('Auth actions', () => {

  it('should login', () => {
    const result = authActions.login();
    expect(result.type).toBe('LOGIN_SAGA');
  });

  it('should logout', () => {
    const result = authActions.logout();
    expect(result.type).toBe('LOGOUT_SAGA');
  });

  it('should getUser', () => {
    const result = authActions.getUser();
    expect(result.type).toBe('GET_USER_SAGA');
  });

  it('should setUser', () => {
    const result = authActions.setUser();
    expect(result.type).toBe('SET_USER');
  });

  it('should setError', () => {
    const result = authActions.setError();
    expect(result.type).toBe('AUTH_ERROR');
  });
});
