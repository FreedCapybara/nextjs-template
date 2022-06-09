import styles from './AccountConfirmation.module.scss';

import { nextjsUtils } from '@utils/nextjs';

import { TwoPaneLayout } from '@components/TwoPaneLayout';

export function AccountConfirmation() {
  return (
    <TwoPaneLayout
      title="Email confirmation"
      backRoute="/"
      backText="Home"
    >
      <h1>AccountConfirmation</h1>
    </TwoPaneLayout>
  );
}

export async function getServerSideProps(context) {

  // verify the token

  return nextjsUtils.createServerSideProps(null);
}

