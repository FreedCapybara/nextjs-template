import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { ToggleSwitch } from '@components/elements';

describe('ToggleSwitch', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ToggleSwitch />);
    expect(component).toBeDefined();
  });

  it('should handle clicks', () => {
    const onClick = jest.fn();
    const props = {
      onClick
    };
    const component = new ToggleSwitch(props);
    component.handleClick();
    expect(onClick).toHaveBeenCalled();
  });

  it('should handle clicks without props', () => {
    const onClick = jest.fn();
    const props = {
      onClick: null
    };
    const component = new ToggleSwitch(props);
    component.handleClick();
    expect(onClick).not.toHaveBeenCalled();
  });
});
