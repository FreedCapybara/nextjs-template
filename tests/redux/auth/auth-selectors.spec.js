import { isAdmin, isInRole } from '@redux/auth/auth-selectors';

describe('Auth selectors', () => {

  it('should determine isAdmin', () => {
    const state = {
      user: {
        roles: ['admin']
      }
    };
    const result = isAdmin(state);
    expect(result).toBe(true);
  });

  it('should determine not isAdmin', () => {
    const state = {
      user: {
        roles: ['not-admin']
      }
    };
    const result = isAdmin(state);
    expect(result).toBe(false);
  });

  it('should determine isInRole', () => {
    const state = {
      user: {
        roles: ['test']
      }
    };
    const result = isInRole(state, 'test');
    expect(result).toBe(true);
  });

  it('should determine not isInRole', () => {
    const state = {
      user: {
        roles: ['not-test']
      }
    };
    const result = isInRole(state, 'test');
    expect(result).toBe(false);
  });
});
