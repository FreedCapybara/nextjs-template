import { getProviders, getSession, signIn } from 'next-auth/react';
import styles from './Login.module.scss';

import { nextjsUtils } from '@utils/nextjs';

import { GoMarkGithub } from 'react-icons/go';
import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function Login(props) {
  const { providers } = props;

  const iconMap = {
    'github': <GoMarkGithub />
  };

  return (
    <TwoPaneLayout
      title="Login"
      backRoute="/"
      backText="Home"
    >
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="cta-button"
            onClick={() => signIn(provider.id)}
          >
            <span className={styles.providerName}>
              Sign in with {provider.name}&nbsp;{iconMap[provider.id]}
            </span>
          </button>
        </div>
      ))}
    </TwoPaneLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect authenticated users
  if (session) {
    return nextjsUtils.createRedirect('/');
  }

  const providers = await getProviders();
  const props = {
    providers
  };
  return nextjsUtils.createServerSideProps(props);
}

