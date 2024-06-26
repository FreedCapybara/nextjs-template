import Link from 'next/link';
import styles from './NotFound.module.scss';

import { CenteredLayout } from '@components/CenteredLayout';
import { Logo } from '@components/Logo';

export function NotFound() {
  return (
    <CenteredLayout title="Not found">
      <div className={styles.container}>
        <Logo />

        <h2>
          Not found
        </h2>

        <p className={styles.description}>
          We were unable to find the requested page.
        </p>

        <Link href="/" passHref className="button">
          
            Back to home
          
        </Link>
      </div>
    </CenteredLayout>
  );
}

