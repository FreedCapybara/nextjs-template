import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Login } from '@pages/login';

describe('Login page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Login />);
    expect(component).toBeDefined();
  });

  it('should render with login error', () => {
    const component = shallowWrapped(<Login authError={true} />);
    expect(component).toBeDefined();
  });

  it('should render with loading', () => {
    const component = shallowWrapped(<Login loading={true} />);
    expect(component).toBeDefined();
  });

  it('should getInitialProps', async () => {
    const context = {
      query: {
        redirect: '/test'
      }
    };
    const result = await Login.getInitialProps(context);
    expect(result.redirect).toBe('/test');
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
    const spy = jest.spyOn(component, 'setState').mockImplementation((state) => component.state = state);

    component.handleInputChange(e);

    expect(spy).toHaveBeenCalledWith({ 'test': 'testValue' });
  });

  it('should submit', () => {
    const login = jest.fn();
    const props = {
      login,
      redirect: ''
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
    expect(login).toHaveBeenCalledWith({ email: 'test@test.net', password: 'password' }, '');
  });
});
