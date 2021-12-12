import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { ForgotPasswordSuccess } from '@pages/account/forgot-password-success';

describe('ForgotPasswordSuccess page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ForgotPasswordSuccess />);
    expect(component).toBeDefined();
  });
});
