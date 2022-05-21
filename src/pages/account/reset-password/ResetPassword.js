import { getSession } from 'next-auth/react';
import styles from './ResetPassword.module.scss';

import { nextjsUtils } from '@utils/nextjs';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function ResetPassword() {
  return (
    <TwoPaneLayout
      title="Reset password"
      backRoute="/login"
      backText="Login"
    >
      <h1>ResetPassword</h1>
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

