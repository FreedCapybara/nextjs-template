import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import Head from 'next/head';
import styles from './centered-layout.module.scss';

function CenteredLayoutComponent(props) {
  return (
    <>
      <div className={styles.wrapper}>
        <Head>
          <title>
            {props.title}
          </title>
        </Head>

        {props.loading ?
            <div className={styles.loadingSpinnerWrapper}>
              {/*<LoadingSpinner size={42} />*/}
            </div>
            :
            props.children
        }
      </div>

      {/*this.props.showModal && (
        <Modal />
      )*/}
    </>
  );
}

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.appState
  };
};

const mapDispatchToProps = {
};

CenteredLayoutComponent.propTypes = {
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export const CenteredLayout = CenteredLayoutComponent; //connect(mapStateToProps, mapDispatchToProps)(CenteredLayoutComponent);

export CenteredLayoutComponent;

