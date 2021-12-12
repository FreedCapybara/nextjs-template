import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

export class NotFound extends React.Component {

  render() {
    return (
      <CenteredLayout title="Not found">
        <Container>
          <Logo />

          <h2>
            Not found!
          </h2>

          <Description>
            We were unable to find the requested page.
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

export default NotFound;

