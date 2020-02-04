import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { FormField } from '@components/elements';

describe('FormField', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<FormField />);
    expect(component).toBeDefined();
  });

  it('should render optional', () => { // for coverage
    const component = shallowWrapped(<FormField optional />);
    expect(component).toBeDefined();
  });
});
