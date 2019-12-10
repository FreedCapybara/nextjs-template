import React from 'react';

import { shallowWrapped } from '@test/wrapper';

import { NotFound } from '@pages/not-found';

describe('NotFound page', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<NotFound />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
