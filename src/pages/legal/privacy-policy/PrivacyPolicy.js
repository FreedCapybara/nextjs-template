import styles from './PrivacyPolicy.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';

export function PrivacyPolicy() {
  return (
    <CenteredLayout
      title="Forgot password"
      backRoute="/"
      backText="Home"
    >
      <h1>PrivacyPolicy</h1>
    </CenteredLayout>
  );
}

