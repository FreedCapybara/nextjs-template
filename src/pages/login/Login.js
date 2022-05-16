import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import styles from './Login.module.scss';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function Login(props) {
  const { providers } = props;

  return (
    <TwoPaneLayout
      title="Login"
      backRoute="/"
      backText="Home"
    >
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </TwoPaneLayout>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}

