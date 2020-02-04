import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { NotFound } from '@pages/_error';

describe('NotFound page', () => {
  const intl = new IntlMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<NotFound intl={intl} />);
    expect(component).toBeDefined();
  });
});
