import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { NotFound } from '@pages/_error';

describe('NotFound page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<NotFound />);
    expect(component).toBeDefined();
  });
});
