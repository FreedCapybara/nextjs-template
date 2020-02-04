import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { LoadingSpinner } from '@components/elements';

describe('LoadingSpinner', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<LoadingSpinner />);
    expect(component).toBeDefined();
  });
});
