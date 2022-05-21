import React from 'react';
import styles from './EditProfile.module.scss';

import { MainLayout } from '@components/MainLayout';

export function EditProfile() {
  return (
    <MainLayout title="Edit profile" section="Account">
      <h1>EditProfile</h1>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect unauthenticated users
  if (!session) {
    return nextjsUtils.createRedirect('/');
  }

  return nextjsUtils.createServerSideProps(null);
}

