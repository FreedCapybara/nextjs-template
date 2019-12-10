import React from 'react';

import { shallowWrapped } from '@test/wrapper';

import { Login } from '@pages/login';

describe('Login page', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<Login />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
