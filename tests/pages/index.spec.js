import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { Home } from '@pages/index';

describe('Home page', () => {
  const intl = new IntlMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Home intl={intl} />);
    expect(component).toBeDefined();
  });
});
