import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { ResetPasswordSuccess } from '@pages/account/reset-password-success';

describe('ResetPasswordSuccess page', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ResetPasswordSuccess />);
    expect(component).toBeDefined();
  });
});
