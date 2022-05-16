import React from 'react';
import { getSession } from 'next-auth/react';
import styles from './Signup.module.scss';

import { nextjsUtils } from '@utils/nextjs';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function Signup() {
  return (
    <TwoPaneLayout
      title="Sign up"
      backRoute="/"
      backText="Home"
    >
      <h1>Signup</h1>
    </TwoPaneLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect authenticated users
  if (session) {
    return nextjsUtils.createRedirect('/');
  }

  return nextjsUtils.createServerSideProps(null);
}

