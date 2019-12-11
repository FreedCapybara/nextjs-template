import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { Login } from '@pages/login';

describe('Login page', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<Login intl={new IntlMock()} />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
