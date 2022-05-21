import { getSession } from 'next-auth/react';
import styles from './Account.module.scss';

import { MainLayout } from '@components/MainLayout';

export function Account() {
  return (
    <MainLayout title="Account">
      <h1>Account</h1>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect unauthenticated users
  if (!session) {
    return nextjsUtils.createRedirect('/');
  }

  const props = {
    session
  };
  return nextjsUtils.createServerSideProps(props);
}

