import styles from './Home.module.scss';

import { MainLayout } from '@components/MainLayout';

export function Home(props) {
  const { data } = props;

  return (
    <MainLayout>
      <h1>Home {data}</h1>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: 'hi'
    }
  };
}

