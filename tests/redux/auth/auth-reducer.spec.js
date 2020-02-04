import { authReducer, authInitialState } from '@redux/auth/auth-reducer';

describe('Auth reducer', () => {

  it('should default to the current state', () => {
    const result = authReducer(undefined, { type: 'TEST' });
    expect(result.user).toBeTruthy();
    expect(result.authError).toBe(false);
  });

  it('should set user', () => {
    const user = { email: 'test' };
    const result = authReducer(authInitialState, { type: 'SET_USER', user });
    expect(result.user.email).toBe('test');
  });

  it('should set error', () => {
    const result = authReducer(authInitialState, { type: 'AUTH_ERROR', authError: true });
    expect(result.authError).toBe(true);
  });
});
