import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './centered-layout.module.scss';

import { selectLoading } from '@features/app';

import { LoadingSpinner } from '@common/components/loading-spinner';

export function CenteredLayoutComponent(props) {

  const loading = useSelector(selectLoading);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          {props.title}
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

CenteredLayoutComponent.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export const CenteredLayout = CenteredLayoutComponent; //connect(mapStateToProps, mapDispatchToProps)(CenteredLayoutComponent);

