import React from 'react';

import { shallowWrapped, mountWrapped } from '@lib/tests';

import { Nav } from '@components/nav';

describe('Nav', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Nav />);
    expect(component).toBeDefined();
  });

  it('should have a home link', () => {
    const component = mountWrapped(<Nav />);
    expect(component.find('a').first().text()).toBe('Home');
  });
});
