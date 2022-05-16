import React from 'react';
import styles from './Signup.module.scss';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function Signup() {
  return (
    <TwoPaneLayout title="Sign up" backRoute="/">
      <h1>Signup</h1>
    </TwoPaneLayout>
  );
}

