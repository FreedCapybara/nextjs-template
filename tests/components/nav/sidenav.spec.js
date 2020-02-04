import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Sidenav } from '@components/nav';

describe('Sidenav', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<Sidenav />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
