import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Home } from '@pages/index';

describe('Home page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Home />);
    expect(component).toBeDefined();
  });
});
