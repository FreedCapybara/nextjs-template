import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import Link from 'next/link';
import styled from 'styled-components';

import { gravatarUrl } from '@lib/gravatar';

import { authActions } from '@redux/actions';

import { MainLayout } from '@components/layout';
import { LinkButton } from '@components/elements';

/* istanbul ignore next */
const ProfileImage = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

const messages = defineMessages({
  defaultUserTitleText: {
    id: 'account.title',
    defaultMessage: 'Workflow',
    description: 'Page title'
  },
  editButtonText: {
    id: 'account.edit',
    defaultMessage: 'Edit profile',
    description: 'Edit button text'
  }
});

export class Account extends React.Component {

  get gravatarUrl() {
    const { user } = this.props;
    return gravatarUrl(user.email, 250);
  }

  render() {
    const { user } = this.props;
    const { formatMessage } = this.props.intl;

    const profile = user.profile || {};

    return (
      <MainLayout title={user.email || formatMessage(messages.defaultUserTitleText)}>

        <Link href="/account/edit-profile" passHref>
          <LinkButton>
            <span className="ti-pencil" />
            {formatMessage(messages.editButtonText)}
          </LinkButton>
        </Link>

        <LinkButton href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="account.edit-profile-image" defaultMessage="Change picture" description="Profile image link text" /> <span className="ti-new-window" />
        </LinkButton>

        <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
          <ProfileImage src={this.gravatarUrl} alt={`Avatar image for ${user.email}`} />
        </a>

        <div>
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>

          <a href={`mailto:${user.email}`}>
            <span className="ti-email" /> {user.email}
          </a>
        </div>

      </MainLayout>
    );
  }
}

Account.propTypes = {
  intl: PropTypes.object,
  user: PropTypes.object
};

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.authState
  };
};

const mapDispatchToProps = {
  ...authActions
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Account));

