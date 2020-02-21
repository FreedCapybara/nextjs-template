import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock } from '@tests/mocks';

import { ResetPasswordSuccess } from '@pages/account/reset-password-success';

describe('ResetPasswordSuccess page', () => {
  const intl = new IntlMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ResetPasswordSuccess intl={intl} />);
    expect(component).toBeDefined();
  });
});
