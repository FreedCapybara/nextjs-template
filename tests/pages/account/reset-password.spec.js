import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { ResetPassword } from '@pages/account/reset-password';

describe('ResetPassword page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ResetPassword />);
    expect(component).toBeDefined();
  });

  it('should render errors', () => {
    const component = shallowWrapped(<ResetPassword authError={true} />);
    expect(component).toBeDefined();
  });

  it('should render password match error', () => {
    const component = shallowWrapped(<ResetPassword />);
    component.setState({
      email: 'test@test.net',
      newPassword: 'test',
      confirmPassword: 'mismatch'
    });
    expect(component).toBeDefined();
  });

  it('should getInitialProps', async () => {
    const context = {
      query: {
        token: 'test'
      }
    };
    const result = await ResetPassword.getInitialProps(context);
    expect(result.token).toBe('test');
  });

  it('should handleInputChange', () => {
    const setAuthError = jest.fn();
    const props = {
      setAuthError
    };
    const e = {
      target: {
        name: 'test',
        value: 'testValue'
      }
    };
    const component = new ResetPassword(props);
    const spy = jest.spyOn(component, 'setState');

    component.handleInputChange(e);

    expect(spy).toHaveBeenCalledWith({ 'test': 'testValue' });
  });

  it('should submit', () => {
    const resetPassword = jest.fn();
    const props = {
      resetPassword
    };

    const preventDefault = jest.fn();
    const e = {
      preventDefault
    };

    const component = new ResetPassword(props);
    component.state = {
      email: 'test@test.net'
    };
    component.submit(e);

    expect(preventDefault).toHaveBeenCalled();
    expect(resetPassword).toHaveBeenCalledWith({ email: 'test@test.net' });
  });
});
