import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { DeleteButtons } from '@components/elements';

describe('DeleteButtons', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<DeleteButtons />);
    expect(component).toBeDefined();
  });

  it('should render with deleteEnabled', () => {
    const component = shallowWrapped(<DeleteButtons />);
    component.instance().setState({ deleteEnabled: true });
    expect(component).toBeDefined();
  });

  it('should toggle delete', () => {
    const props = {};
    const component = new DeleteButtons(props);
    jest.spyOn(component, 'setState').mockImplementation((state) => component.state = state);

    component.toggleDelete();
    expect(component.state.deleteEnabled).toBe(true);
  });

  it('should handle delete', () => {
    const onDelete = jest.fn();
    const props = {
      onDelete
    };
    const component = new DeleteButtons(props);

    component.delete();
    expect(onDelete).toHaveBeenCalled();
  });

  it('should handle delete without props', () => {
    const onDelete = jest.fn();
    const props = {
      onDelete: null
    };
    const component = new DeleteButtons(props);

    component.delete();
    expect(onDelete).not.toHaveBeenCalled();
  });
});
