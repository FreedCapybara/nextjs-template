import styles from './TermsAndConditions.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';

export function TermsAndConditions() {
  return (
    <CenteredLayout
      title="Forgot password"
      backRoute="/"
      backText="Home"
    >
      <h1>TermsAndConditions</h1>
    </CenteredLayout>
  );
}

