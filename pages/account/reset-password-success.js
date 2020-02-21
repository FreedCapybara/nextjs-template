import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import Link from 'next/link';

import { CenteredLayout } from '@components/layout';
import { Logo, LinkButton } from '@components/elements';

const messages = defineMessages({
  pageTitleText: {
    id: 'reset-password-success.page-title',
    defaultMessage: 'Success!',
    description: 'Page title',
  },
  backText: {
    id: 'reset-password-success.back',
    defaultMessage: 'Back to login',
    description: 'Back link'
  }
});

export class ResetPasswordSuccess extends React.Component {

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <CenteredLayout title={formatMessage(messages.pageTitleText)}>
        <Logo height="108px" />

        <h2>
          <FormattedMessage id="reset-password-success.title" defaultMessage="Success!" description="Page title" />
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

ResetPasswordSuccess.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(ResetPasswordSuccess);

