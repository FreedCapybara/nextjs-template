import { authReducer, authInitialState } from '@redux/auth/auth-reducer';

describe('Auth reducer', () => {

  it('should default to the current state', () => {
    const result = authReducer(undefined, { type: 'TEST' });
    expect(result.user).toBeTruthy();
    expect(result.error).toBe(false);
  });

  it('should set user', () => {
    const user = { email: 'test' };
    const result = authReducer(authInitialState, { type: 'SET_USER', user });
    expect(result.user.email).toBe('test');
    expect(result.error).toBe(false);
  });

  it('should set error', () => {
    const result = authReducer(authInitialState, { type: 'AUTH_ERROR', error: true });
    expect(result.user).toBeTruthy();
    expect(result.error).toBe(true);
  });
});
