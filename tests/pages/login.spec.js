import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { Login } from '@pages/login';

describe('Login page', () => {
  const intl = new IntlMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Login intl={intl} />);
    expect(component).toBeDefined();
  });

  it('should render with login error', () => {
    const component = shallowWrapped(<Login intl={intl} authError={true} />);
    expect(component).toBeDefined();
  });

  it('should render with loading', () => {
    const component = shallowWrapped(<Login intl={intl} loading={true} />);
    expect(component).toBeDefined();
  });

  it('should handleInputChange', () => {
    const props = {};
    const e = {
      target: {
        name: 'test',
        value: 'testValue'
      }
    };
    const component = new Login(props);
    const spy = spyOn(component, 'setState');

    component.handleInputChange(e);

    expect(spy).toHaveBeenCalledWith({ 'test': 'testValue' });
  });

  it('should submit', () => {
    const login = jest.fn();
    const props = {
      login
    };

    const preventDefault = jest.fn();
    const e = {
      preventDefault
    };

    const component = new Login(props);
    component.state = {
      email: 'test@test.net',
      password: 'password'
    };

    component.submit(e);

    expect(preventDefault).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith({ email: 'test@test.net', password: 'password' });
  });
});
