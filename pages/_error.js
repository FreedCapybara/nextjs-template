import React from 'react';
import Link from 'next/link';
import styles from './_error.module.scss';

import { CenteredLayout } from '@components/centered-layout';
import { Logo } from '@components/logo';

export default function NotFound() {
  return (
    <CenteredLayout title="Not found">
      <div className={styles.container}>
        <Logo />

        <h2>
          Server error!
        </h2>

        <p className={styles.description}>
          There was an error displaying the page.
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

