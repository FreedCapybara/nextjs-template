import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Logo } from '@components/elements';

describe('Logo', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Logo />);
    expect(component).toBeDefined();
  });
});
