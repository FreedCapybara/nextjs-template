import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import Link from 'next/link';

import { CenteredLayout } from '@components/layout';
import { Logo, LinkButton } from '@components/elements';

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
      <CenteredLayout title={formatMessage(messages.pageTitleText)}>
        <Logo height="108px" />

        <h2>
          <FormattedMessage id="forgot-password-success.title" defaultMessage="Success!" description="Page title" />
        </h2>

        <Link href="/" passHref>
          <LinkButton>
            {formatMessage(messages.backText)}
          </LinkButton>
        </Link>
      </CenteredLayout>
    );
  }
}

ForgotPasswordSuccess.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(ForgotPasswordSuccess);

