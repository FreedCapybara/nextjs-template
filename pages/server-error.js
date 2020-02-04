import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
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

const messages = defineMessages({
  pageTitleText: {
    id: 'error.page-title',
    defaultMessage: 'Error',
    description: 'Page title',
  },
  backToHomeText: {
    id: 'error.back',
    defaultMessage: 'Back to home',
    description: 'Back button text',
  }
});

export class ServerError extends React.Component {

  static async getInitialProps(context) {
    const { store } = context;
    store.dispatch(appActions.setError(false));
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <CenteredLayout title={formatMessage(messages.pageTitleText)}>
        <Container>
          <Logo />

          <h2>
            <FormattedMessage id="error.title" defaultMessage="Error" description="Page title" />
          </h2>

          <Description>
            <FormattedMessage id="error.description" defaultMessage="The page encountered an error. We've been notified and will hopefully have it fixed soon!" description="Page description" />
          </Description>

          <Link href="/" passHref>
            <LinkButton>
              {formatMessage(messages.backToHomeText)}
            </LinkButton>
          </Link>
        </Container>
      </CenteredLayout>
    );
  }
}

ServerError.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(ServerError);

