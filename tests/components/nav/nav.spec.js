import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { Nav } from '@components/nav';

describe('Nav', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<Nav intl={new IntlMock()} />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
