import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.scss';

import { CenteredLayout } from '@components/centered-layout';
import { Logo } from '@components/logo';

function NotFound() {
  return (
    <CenteredLayout title="Not found">
      <div className={styles.container}>
        <Logo />

        <h2>
          Not found!
        </h2>

        <p className={styles.description}>
          We were unable to find the requested page.
        </p>

        <Link href="/" passHref>
          <a className="link-button">
            Back to home
          </a>
        </Link>
      </div>
    </CenteredLayout>
  );
}

export default NotFound;

