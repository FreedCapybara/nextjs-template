import React from 'react';
import { shallow } from 'enzyme';

import { Nav } from '@components/nav';

describe('Nav', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Nav />);
    expect(component.find('a').first().text()).toBe('Home');
  });
});
