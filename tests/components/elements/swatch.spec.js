import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Swatch } from '@components/elements';

describe('Swatch', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Swatch color={0} />);
    expect(component).toBeDefined();
  });
});
