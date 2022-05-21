import { getSession } from 'next-auth/react';
import styles from './Home.module.scss';

import { nextjsUtils } from '@utils/nextjs';

import { MainLayout } from '@components/MainLayout';

export function Home(props) {
  const { data } = props;

  return (
    <MainLayout title="Home">
      <h1>Home {data}</h1>
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
    data: 'hi'
  };
  return nextjsUtils.createServerSideProps(props);
}

