import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head';

import { LoadingSpinner, Modal } from '@components/elements';

/* istanbul ignore next */
const Wrapper = styled.div`
  display: flex;
`;

/* istanbul ignore next */
const LeftPane = styled.div`
  height: 100vh;
  min-width: 28%;
  background: linear-gradient(to bottom right, rgba(0, 10, 20, .1), rgba(20, 10, 0, .1)), url('/images/leftpane.jpg');
  background-size: 100%, cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  display: none;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    display: block;
  }
`;

/* istanbul ignore next */
const RightPane = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
`;

/* istanbul ignore next */
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 120px 20px;
`;

export class TwoPaneLayoutComponent extends React.Component {

  render() {
    const { title, loading, showModal } = this.props;

    return (
      <React.Fragment>
        <Wrapper>
          <Head>
            <title>
              {title}
            </title>
          </Head>

          <LeftPane />
          <RightPane>
            <ContentWrapper>
              {loading ?
                  <LoadingSpinner size={42} />
                  :
                  this.props.children
              }
            </ContentWrapper>
          </RightPane>
        </Wrapper>

        {showModal &&
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

TwoPaneLayoutComponent.propTypes = {
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export const TwoPaneLayout = connect(mapStateToProps, mapDispatchToProps)(TwoPaneLayoutComponent);

