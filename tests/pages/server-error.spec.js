import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { ServerError } from '@pages/server-error';

describe('Server error page', () => {
  let component;

  beforeEach(() => {
    component = shallowWrapped(<ServerError intl={new IntlMock()} />);
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });
});
