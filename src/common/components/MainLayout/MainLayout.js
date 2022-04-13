import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './MainLayout.module.scss';

import theme from '@app/theme';

import { selectLoading } from '@features/app';

import { Nav } from '@components/Nav';
import { Footer } from '@components/Footer';
import { LoadingSpinner } from '@components/LoadingSpinner';

export function MainLayout(props) {
  const { title, section } = props;

  const loading = useSelector(selectLoading);

  const loadingSpinnerWrapperStyle = {
    opacity: +loading // 1 if true, 0 if false
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          {title} {section ? `| ${section}` : null} | {theme.appName}
        </title>
      </Head>

      <Nav />

      <div className={styles.mainContent}>

        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {props.children}
          </div>
        </div>

        <div className={styles.loadingSpinnerWrapper} style={loadingSpinnerWrapperStyle}>
          <LoadingSpinner size={24} shadow />
        </div>
      </div>

      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string, // page title
  section: PropTypes.string, // optional "section" for the page title, for titles like "Page title | Section | AppName"
  children: PropTypes.node
};

