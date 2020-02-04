import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { NavComponent } from '@components/nav';

describe('Nav', () => {
  const intl = new IntlMock();
  const user = {
    email: 'test@test.net'
  };
  const organization = {
    name: 'Test Organization'
  };

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<NavComponent intl={intl} user={user} organization={organization} />);
    expect(component).toBeDefined();
  });

  it('should render default organization text', () => {
    const component = shallowWrapped(<NavComponent intl={intl} user={user} organization={{}} />);
    expect(component).toBeDefined();
  });

  it('should logout', () => {
    const logout = jest.fn();
    const props = {
      logout
    };
    const component = new NavComponent(props);
    component.logout();
    expect(logout).toHaveBeenCalled();
  });
});
