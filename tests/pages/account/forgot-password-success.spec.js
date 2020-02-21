import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { ForgotPasswordSuccess } from '@pages/account/forgot-password-success';

describe('ForgotPasswordSuccess page', () => {
  const intl = new IntlMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ForgotPasswordSuccess intl={intl} />);
    expect(component).toBeDefined();
  });
});
