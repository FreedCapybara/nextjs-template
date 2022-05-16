import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './TwoPaneLayout.module.scss';

import theme from '@app/theme';

import { selectLoading } from '@features/app';

import { FiArrowLeft } from 'react-icons/fi';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { Toolbar } from '@components/Toolbar';
import { ToolbarGroup } from '@components/ToolbarGroup';

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
          <div className={styles.toolbarWrapper}>
            <Toolbar>
              <ToolbarGroup>
                <Link href={backRoute}>
                  <a className="icon-button">
                    <FiArrowLeft />
                    {!!backText && (
                      <span>{backText}</span>
                    )}
                  </a>
                </Link>
              </ToolbarGroup>
            </Toolbar>
          </div>
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

