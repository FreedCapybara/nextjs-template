import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head';

import { Nav } from '@components/nav';
import { LoadingSpinner, Modal } from '@components/elements';

/* istanbul ignore next */
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

/* istanbul ignore next */
const MainContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.toolbar.mobileHeight});
  top: ${({ theme }) => theme.toolbar.mobileHeight};

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    height: calc(100vh - ${({ theme }) => theme.toolbar.desktopHeight});
    top: ${({ theme }) => theme.toolbar.desktopHeight};
  }
`;

/* istanbul ignore next */
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  overflow-y: auto;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopHdBreakpointMin}) {
    max-width: 1080px;
  }
`;

/* istanbul ignore next */
const ContentWrapper = styled.div`
  margin-bottom: 80px;
`;

/* istanbul ignore next */
const LoadingSpinnerWrapper = styled.div`
  position: fixed;
  top: calc(${({ theme }) => theme.toolbar.mobileHeight} + 20px);
  right: 20px;
  z-index: 1;
  opacity: ${({ isLoading }) => isLoading ? '1' : '0'};
  transition: opacity 0.3s;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    top: calc(${({ theme }) => theme.toolbar.desktopHeight} + 32px);
    right: 32px;
  }
`;

export class MainLayoutComponent extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Wrapper>
          <Head>
            <title>
              {this.props.title}
            </title>
          </Head>

          <Nav />

          <MainContent>

            <Container>
              <ContentWrapper>
                {this.props.children}
              </ContentWrapper>
            </Container>

            <LoadingSpinnerWrapper isLoading={this.props.loading}>
              <LoadingSpinner />
            </LoadingSpinnerWrapper>
          </MainContent>
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

MainLayoutComponent.propTypes = {
  showModal: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export const MainLayout = connect(mapStateToProps, mapDispatchToProps)(MainLayoutComponent);

