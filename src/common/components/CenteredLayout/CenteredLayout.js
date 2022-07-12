import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './CenteredLayout.module.scss';

import theme from '@app/theme';

import { selectLoading } from '@features/app';

import { LoadingSpinner } from '@components/LoadingSpinner';
import { BackButtonToolbar } from '@components/BackButtonToolbar';
import { Footer } from '@components/Footer';

export function CenteredLayout(props) {
  const { title, section, backRoute, backText } = props;

  const loading = useSelector(selectLoading);

  return (
    <>
    <div className={styles.wrapper}>
      <Head>
        <title>
          {`${title} ${section ? `| ${section}` : ''} | ${theme.appName}`}
        </title>
      </Head>

      {!!backRoute && (
        <BackButtonToolbar
          backRoute={backRoute}
          backText={backText}
        />
      )}

      {loading ? (
        <div className={styles.loadingSpinnerWrapper}>
          <LoadingSpinner size={42} />
        </div>
      ) : (
        props.children
      )}
    </div>

    <Footer />
    </>
  );
}

CenteredLayout.propTypes = {
  title: PropTypes.string, // page title
  section: PropTypes.string, // optional "section" for the page title, for titles like "Page title | Section | AppName"
  children: PropTypes.node
};

