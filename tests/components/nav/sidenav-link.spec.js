import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { SidenavLink } from '@components/nav';

describe('SidenavLink', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<SidenavLink />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
