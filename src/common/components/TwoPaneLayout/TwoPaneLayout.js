import PropTypes from 'prop-types';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import styles from './TwoPaneLayout.module.scss';

import theme from '@app/theme';

import { selectLoading } from '@features/app';

import { LoadingSpinner } from '@components/LoadingSpinner';
import { BackButtonToolbar } from '@components/BackButtonToolbar';

export function TwoPaneLayout(props) {
  const { title, section, backRoute, backText } = props;

  const loading = useSelector(selectLoading);

  const leftPaneStyle = {
    backgroundImage: `url('${theme.layout.twoPaneLayoutImageUrl}')`
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          {title} {section ? `| ${section}` : null} | {theme.appName}
        </title>
      </Head>

      <div className={styles.leftPane} style={leftPaneStyle} />

      <div className={styles.rightPane}>

        {!!backRoute && (
          <BackButtonToolbar
            backRoute={backRoute}
            backText={backText}
          />
        )}

        <div className={styles.contentWrapper}>
          {loading ? (
            <LoadingSpinner size={42} />
          ) : (
            props.children
          )}
        </div>
      </div>
    </div>
  );
}

TwoPaneLayout.propTypes = {
  title: PropTypes.string, // page title
  section: PropTypes.string, // optional "section" for the page title, for titles like "Page title | Section | AppName"
  children: PropTypes.node
};

