import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

/* istanbul ignore next */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 120px 20px;
`;

const messages = defineMessages({
  pageTitleText: {
    id: 'forgot-password-success.page-title',
    defaultMessage: 'Success!',
    description: 'Page title',
  },
  backText: {
    id: 'forgot-password-success.back',
    defaultMessage: 'Back to login',
    description: 'Back link'
  }
});

export class ForgotPasswordSuccess extends React.Component {

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <Wrapper>
        <Head>
          <title>
            {formatMessage(messages.pageTitleText)}
          </title>
        </Head>

        <img src="/images/logo-blue.png" alt="Logo" />

        <h2>
          <FormattedMessage id="forgot-password-success.title" defaultMessage="Success!" description="Page title" />
        </h2>

        <Link href="/">
          <a className="button">
            {formatMessage(messages.backText)}
          </a>
        </Link>
      </Wrapper>
    );
  }
}

ForgotPasswordSuccess.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(ForgotPasswordSuccess);

