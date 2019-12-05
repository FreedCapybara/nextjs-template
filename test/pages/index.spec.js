import React from 'react';
import { shallow } from 'enzyme';

import Home from '@pages/index';

describe('Home page', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Home />);
    expect(component.find('h1.title').text()).toBe('Welcome to Next.js!');
  });
});
