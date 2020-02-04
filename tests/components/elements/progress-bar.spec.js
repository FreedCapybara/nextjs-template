import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { ProgressBar } from '@components/elements';

describe('ProgressBar', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ProgressBar progress={.5} />);
    expect(component).toBeDefined();
  });
});
