import Link from 'next/link';
import styles from './ServerError.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';
import { Logo } from '@components/Logo';

export function ServerError() {
  return (
    <CenteredLayout title="Server error">
      <div className={styles.container}>
        <Logo />

        <h2>
          Server error
        </h2>

        <p className={styles.description}>
          The page encountered an error!
        </p>

        <Link href="/" passHref className="button">
          
            Back to home
          
        </Link>
      </div>
    </CenteredLayout>
  );
}

