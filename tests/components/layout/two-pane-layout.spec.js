import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { TwoPaneLayoutComponent } from '@components/layout';

describe('TwoPaneLayout', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<TwoPaneLayoutComponent />);
    expect(component).toBeDefined();
  });

  it('should render loading', () => {
    const component = shallowWrapped(<TwoPaneLayoutComponent loading={true} />);
    expect(component).toBeDefined();
  });

  it('should render modal', () => {
    const component = shallowWrapped(<TwoPaneLayoutComponent showModal={true} />);
    expect(component).toBeDefined();
  });
});
