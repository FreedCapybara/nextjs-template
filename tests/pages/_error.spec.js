import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { NotFound } from '@pages/_error';

describe('NotFound page', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<NotFound intl={new IntlMock()} />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
