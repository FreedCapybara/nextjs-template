import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { ModalComponent } from '@components/elements';

describe('Modal', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ModalComponent />);
    expect(component).toBeDefined();
  });

  it("should consume events", () => {
    const stopPropagation = jest.fn();
    const event = {
      stopPropagation
    };

    const component = new ModalComponent();
    component.consumeEvent(event);

    expect(stopPropagation).toHaveBeenCalled();
  });

  it("should cancel", () => {
    const hideModal = jest.fn();
    const props = {
      hideModal
    };

    const component = new ModalComponent(props);
    component.cancel();

    expect(hideModal).toHaveBeenCalled();
  });
});
