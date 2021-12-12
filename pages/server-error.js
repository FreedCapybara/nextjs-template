import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { appActions } from '@redux/actions';

import { CenteredLayout } from '@components/layout';
import { Logo, LinkButton } from '@components/elements';

/* istanbul ignore next */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
`;

/* istanbul ignore next */
const Description = styled.p`
  margin-bottom: 40px;
`;

export class ServerError extends React.Component {

  static async getInitialProps(context) {
    const { store } = context;
    store.dispatch(appActions.setError(false));
  }

  render() {
    return (
      <CenteredLayout title="Error">
        <Container>
          <Logo />

          <h2>
            Error
          </h2>

          <Description>
            The page encountered an error. We&apos;ve been notified and will hopefully have it fixed soon!
          </Description>

          <Link href="/" passHref>
            <LinkButton>
              Back to home
            </LinkButton>
          </Link>
        </Container>
      </CenteredLayout>
    );
  }
}

export default ServerError;

