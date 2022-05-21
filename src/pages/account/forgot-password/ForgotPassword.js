import { getSession } from 'next-auth/react';
import styles from './ForgotPassword.module.scss';

import { nextjsUtils } from '@utils/nextjs';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function ForgotPassword() {
  return (
    <TwoPaneLayout
      title="Forgot password"
      backRoute="/login"
      backText="Login"
    >
      <h1>ForgotPassword</h1>
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

