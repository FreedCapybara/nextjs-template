import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './centered-layout.module.scss';

import theme from '@app/theme';

import { selectLoading } from '@features/app';

import { LoadingSpinner } from '@components/loading-spinner';

export function CenteredLayout(props) {
  const { title, section } = props;

  const loading = useSelector(selectLoading);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          {title} {section ? `| ${section}` : null} | {theme.appName}
        </title>
      </Head>

      {loading ? (
        <div className={styles.loadingSpinnerWrapper}>
          <LoadingSpinner size={42} />
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}

CenteredLayout.propTypes = {
  title: PropTypes.string, // page title
  section: PropTypes.string, // optional "section" for the page title, for titles like "Page title | Section | AppName"
  children: PropTypes.node
};

