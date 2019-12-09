import React from 'react';

import { shallowWrapped, mountWrapped } from '@lib/tests';

import Home from '@pages/index';

describe('Home page', () => {
  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Home />);
    expect(component).toBeDefined();
  });

  it('should render without throwing an error', () => {
    const component = mountWrapped(<Home />);
    expect(component.find('h1').text()).toBe('Welcome to Next.js!');
  });
});
