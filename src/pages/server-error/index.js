import React from 'react';
import Link from 'next/link';
import styles from './server-error.module.scss';

import { CenteredLayout } from '@components/centered-layout';
import { Logo } from '@components/logo';

function ServerError() {
  return (
    <CenteredLayout title="Server error">
      <div className={styles.container}>
        <Logo />

        <h2>
          Server error!
        </h2>

        <p className={styles.description}>
          The page encountered an error!
        </p>

        <Link href="/" passHref>
          <a className="button">
            Back to home
          </a>
        </Link>
      </div>
    </CenteredLayout>
  );
}

export default ServerError;

