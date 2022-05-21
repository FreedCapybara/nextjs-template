import { useSession, getSession } from 'next-auth/react';
import { Landing } from './landing/Landing';
import { Home, getServerSideProps as getHomeServerSideProps } from './home/Home';

export default function Index(props) {

  const { data: session } = useSession();

  return session ? (
    <Home {...props} />
  ) : (
    <Landing {...props} />
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const additionalProps = session ?
    await getHomeServerSideProps(context) :
    null;

  return {
    props: {
      session,
      ...additionalProps?.props
    }
  };
}

