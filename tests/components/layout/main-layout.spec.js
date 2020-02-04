import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { MainLayoutComponent } from '@components/layout';

describe('MainLayout', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<MainLayoutComponent />);
    expect(component).toBeDefined();
  });

  it('should render modal', () => {
    const component = shallowWrapped(<MainLayoutComponent showModal={true} />);
    expect(component).toBeDefined();
  });
});
