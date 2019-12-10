import React from 'react';

import { shallowWrapped } from '@test/wrapper';

import { Error } from '@pages/error';

describe('Error page', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<Error />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
