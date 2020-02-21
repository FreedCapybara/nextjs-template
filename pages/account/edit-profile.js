import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import styled from 'styled-components';

import { trackEvent } from '@lib/analytics';
import { gravatarUrl } from '@lib/gravatar';

import { authActions } from '@redux/actions';

import { MainLayout } from '@components/layout';
import { Button, LinkButton, Form, FormField } from '@components/elements';

/* istanbul ignore next */
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

const messages = defineMessages({
  pageTitleText: {
    id: 'profile-edit.page-title',
    defaultMessage: 'Edit profile',
    description: 'Page title'
  },
  firstNameLabelText: {
    id: 'profile-edit.first-name',
    defaultMessage: 'First name',
    description: 'Form field label'
  },
  lastNameLabelText: {
    id: 'profile-edit.last-name',
    defaultMessage: 'Last name',
    description: 'Form field label'
  },
});

export class EditProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.user.profile
    };
  }

  get gravatarUrl() {
    const { user } = this.props;
    return gravatarUrl(user.email, 250);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.updateProfile(this.state);
    trackEvent('profile', 'save', 'profile saved');
  };

  render() {
    const { user } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <MainLayout title={formatMessage(messages.pageTitleText)}>

        <LinkButton href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="profile-edit.edit-profile-image" defaultMessage="Change picture" description="Profile image link text" /> <span className="ti-new-window" />
        </LinkButton>

        <Form onSubmit={this.submit}>

          <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
            <ProfileImage src={this.gravatarUrl} alt={`Avatar image for ${user.email}`} />
          </a>

          <FormField label={formatMessage(messages.firstNameLabelText)}>
            <input type="text" id="firstName" name="firstName"
              onChange={this.handleInputChange} value={this.state.firstName || ''} required />

            <p>
              <FormattedMessage
                id="profile-edit.manifesturl-field-description"
                defaultMessage="Your first name."
                description="Form field description" />
            </p>
          </FormField>

          <FormField label={formatMessage(messages.lastNameLabelText)}>
            <input type="text" id="lastName" name="lastName"
              onChange={this.handleInputChange} value={this.state.lastName || ''} />

            <p>
              <FormattedMessage
                id="profile-edit.publickey-field-description"
                defaultMessage="Your last name."
                description="Form field description" />
            </p>
          </FormField>

          <Button type="submit">
            <FormattedMessage id="profile-edit.submit" defaultMessage="Save" description="Submit button" />
          </Button>
        </Form>
      </MainLayout>
    );
  }
}

EditProfile.propTypes = {
  intl: PropTypes.object,
  user: PropTypes.object,
  updateProfile: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(EditProfile));

