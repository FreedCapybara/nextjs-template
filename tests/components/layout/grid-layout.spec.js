import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { GridLayout } from '@components/layout';

describe('GridLayout', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<GridLayout />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
