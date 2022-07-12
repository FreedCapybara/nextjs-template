import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './LandingPageLayout.module.scss';

import theme from '@app/theme';

import { LandingNav } from '@components/LandingNav';

export function LandingPageLayout(props) {
  const { title, section } = props;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          {`${title} ${section ? `| ${section}` : ''} | ${theme.appName}`}
        </title>
      </Head>

      <LandingNav />

      <div className={styles.mainContent}>
        {props.children}
      </div>
    </div>
  );
}

LandingPageLayout.propTypes = {
  title: PropTypes.string, // page title
  section: PropTypes.string, // optional "section" for the page title, for titles like "Page title | Section | AppName"
};

