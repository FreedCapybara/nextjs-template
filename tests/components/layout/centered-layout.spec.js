import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { CenteredLayoutComponent } from '@components/layout';

describe('CenteredLayout', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<CenteredLayoutComponent />);
    expect(component).toBeDefined();
  });

  it('should loading', () => {
    const component = shallowWrapped(<CenteredLayoutComponent loading={true} />);
    expect(component).toBeDefined();
  });

  it('should render modal', () => {
    const component = shallowWrapped(<CenteredLayoutComponent showModal={true} />);
    expect(component).toBeDefined();
  });
});
