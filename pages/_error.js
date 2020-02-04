
import React from 'react';
import PropTypes from 'prop-types';
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
    id: 'not-found.page-title',
    defaultMessage: 'Not found',
    description: 'Page title',
  },
  backToHomeText: {
    id: 'not-found.back',
    defaultMessage: 'Back to home',
    description: 'Back button text',
  }
});

export class NotFound extends React.Component {

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
            <FormattedMessage id="not-found.title" defaultMessage="Not found!" description="Page title" />
          </h2>

          <Description>
            <FormattedMessage id="not-found.description" defaultMessage="Not found? Well, what were you looking for?" description="Page description" />
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

NotFound.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(NotFound);

