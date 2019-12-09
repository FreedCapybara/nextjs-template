import React from 'react';
import { shallowWithIntl, mountWithIntl } from '@lib/i18n';

import { Nav } from '@components/nav';

describe('Nav', () => {

  it('should render without throwing an error', () => {
    const component = shallowWithIntl(<Nav />);
    expect(component).toBeDefined();
  });

  it('should have a home link', () => {
    const component = mountWithIntl(<Nav />);
    expect(component.find('a').first().text()).toBe('Home');
  });
});
