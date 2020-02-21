import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { ForgotPassword } from '@pages/account/forgot-password';

describe('ForgotPassword page', () => {
  const intl = new IntlMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ForgotPassword intl={intl} />);
    expect(component).toBeDefined();
  });

  it('should handleInputChange', () => {
    const props = {
    };
    const e = {
      target: {
        name: 'test',
        value: 'testValue'
      }
    };
    const component = new ForgotPassword(props);
    const spy = spyOn(component, 'setState');

    component.handleInputChange(e);

    expect(spy).toHaveBeenCalledWith({ 'test': 'testValue' });
  });

  it('should submit', () => {
    const forgotPassword = jest.fn();
    const props = {
      forgotPassword
    };

    const preventDefault = jest.fn();
    const e = {
      preventDefault
    };

    const component = new ForgotPassword(props);
    component.state = {
      email: 'test@test.net'
    };
    component.submit(e);

    expect(preventDefault).toHaveBeenCalled();
    expect(forgotPassword).toHaveBeenCalledWith({ email: 'test@test.net' });
  });
});
