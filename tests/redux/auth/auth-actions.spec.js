import { authActions } from '@redux/actions';

describe('Auth actions', () => {

  it('should login', () => {
    const result = authActions.login({});
    expect(result.type).toBe('LOGIN_SAGA');
    expect(result.credentials).toBeTruthy();
  });

  it('should register', () => {
    const result = authActions.register({});
    expect(result.type).toBe('REGISTER_SAGA');
    expect(result.credentials).toBeTruthy();
  });

  it('should logout', () => {
    const result = authActions.logout();
    expect(result.type).toBe('LOGOUT_SAGA');
  });

  it('should getUser', () => {
    const result = authActions.getUser();
    expect(result.type).toBe('GET_USER_SAGA');
  });

  it('should updateProfile', () => {
    const result = authActions.updateProfile({});
    expect(result.type).toBe('UPDATE_PROFILE_SAGA');
    expect(result.profile).toBeTruthy();
  });

  it('should forgotPassword', () => {
    const result = authActions.forgotPassword({});
    expect(result.type).toBe('FORGOT_PASSWORD_SAGA');
    expect(result.model).toBeTruthy();
  });

  it('should resetPassword', () => {
    const result = authActions.resetPassword({});
    expect(result.type).toBe('RESET_PASSWORD_SAGA');
    expect(result.model).toBeTruthy();
  });

  it('should setUser', () => {
    const result = authActions.setUser({});
    expect(result.type).toBe('SET_USER');
    expect(result.user).toBeTruthy();
  });

  it('should setError', () => {
    const result = authActions.setAuthError(true);
    expect(result.type).toBe('AUTH_ERROR');
    expect(result.authError).toBeTruthy();
  });
});
