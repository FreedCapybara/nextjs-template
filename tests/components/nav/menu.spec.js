import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Menu } from '@components/nav';

describe('Menu', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Menu />);
    expect(component).toBeDefined();
  });

  it('should render open', () => {
    const component = shallowWrapped(<Menu />);
    component.instance().setState({ isOpen: true });
    expect(component).toBeDefined();
  });

  it('should render mobileButton', () => {
    const component = shallowWrapped(<Menu mobileButton={<button>Test</button>} />); // eslint-disable-line react/jsx-no-literals
    component.instance().setState({ isOpen: true });
    expect(component).toBeDefined();
  });

  it('should open', () => {
    const props = {};
    const component = new Menu(props);
    jest.spyOn(component, 'setState').mockImplementation((state) => component.state = state);
    component.openMenu();
    expect(component.state.isOpen).toBe(true);
  });

  it('should close', () => {
    const props = {};
    const component = new Menu(props);
    jest.spyOn(component, 'setState').mockImplementation((state) => component.state = state);
    component.closeMenu();
    expect(component.state.isOpen).toBe(false);
  });
});
