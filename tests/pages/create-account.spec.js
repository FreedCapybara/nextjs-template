import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { CreateAccount } from '@pages/create-account';

describe('CreateAccount page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<CreateAccount />);
    expect(component).toBeDefined();
  });

  it('should render loading', () => {
    const component = shallowWrapped(<CreateAccount loading={true} />);
    expect(component).toBeDefined();
  });

  it('should render errors', () => {
    const component = shallowWrapped(<CreateAccount authError={true} />);
    expect(component).toBeDefined();
  });

  it('should render password match error', () => {
    const component = shallowWrapped(<CreateAccount />);
    component.setState({
      email: 'test@test.net',
      password: 'test',
      confirmPassword: 'mismatch'
    });
    expect(component).toBeDefined();
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
    const component = new CreateAccount(props);
    const spy = jest.spyOn(component, 'setState').mockImplementation((state) => component.state = state);

    component.handleInputChange(e);

    expect(spy).toHaveBeenCalledWith({ 'test': 'testValue' });
  });

  it('should submit', () => {
    const register = jest.fn();
    const props = {
      register
    };

    const preventDefault = jest.fn();
    const e = {
      preventDefault
    };

    const component = new CreateAccount(props);
    component.state = {
      username: 'test@test.net',
      password: 'test'
    };

    component.submit(e);

    expect(preventDefault).toHaveBeenCalled();
    expect(register).toHaveBeenCalledWith({ username: 'test@test.net', password: 'test' });
  });
});

