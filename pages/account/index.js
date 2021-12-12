import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';

import { gravatarUrl } from '@lib/gravatar';

import { authActions } from '@redux/actions';

import { MainLayout } from '@components/layout';
import { LinkButton } from '@components/elements';

/* istanbul ignore next */
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

export class Account extends React.Component {

  get gravatarUrl() {
    const { user } = this.props;
    return gravatarUrl(user.email, 250);
  }

  render() {
    const { user } = this.props;
    const profile = user.profile || {};

    return (
      <MainLayout title={user.email || 'Your profile'}>

        <Link href="/account/edit-profile" passHref>
          <LinkButton>
            <span className="ti-pencil" />
            Edit profile
          </LinkButton>
        </Link>

        <LinkButton href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
          Change picture
        </LinkButton>

        <div>
          <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
            <ProfileImage src={this.gravatarUrl} alt={`Avatar image for ${user.email}`} />
          </a>
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Account);

