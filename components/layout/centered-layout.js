import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head';

import { Nav } from '@components/nav';
import { LoadingSpinner, Modal } from '@components/elements';

/* istanbul ignore next */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 120px 20px;
`;

/* istanbul ignore next */
const LoadingSpinnerWrapper = styled.div`
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export class CenteredLayoutComponent extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Wrapper>
          <Head>
            <title>
              {this.props.title}
            </title>
          </Head>

          {this.props.loading ?
              <LoadingSpinnerWrapper>
                <LoadingSpinner size={42} />
              </LoadingSpinnerWrapper>
              :
              this.props.children
          }
        </Wrapper>

        {this.props.showModal &&
            <Modal />}
      </React.Fragment>
    );
  }
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

export const CenteredLayout = connect(mapStateToProps, mapDispatchToProps)(CenteredLayoutComponent);

