import React from 'react';
import styles from './ForgotPassword.module.scss';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function ForgotPassword() {
  return (
    <TwoPaneLayout title="Forgot password" backRoute="/login">
      <h1>ForgotPassword</h1>
    </TwoPaneLayout>
  );
}

