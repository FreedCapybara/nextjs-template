import React from 'react';

import { shallowWrapped } from '@test/wrapper';

import { Nav } from '@components/nav';

describe('Nav', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<Nav />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
