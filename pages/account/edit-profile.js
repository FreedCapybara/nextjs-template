import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

    return (
      <MainLayout title="Edit profile">

        <LinkButton href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
          Change picture
        </LinkButton>

        <Form onSubmit={this.submit}>

          <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">
            <ProfileImage src={this.gravatarUrl} alt={`Avatar image for ${user.email}`} />
          </a>

          <FormField label="First name">
            <input type="text" id="firstName" name="firstName"
              onChange={this.handleInputChange} value={this.state.firstName || ''} required />

            <p>
                Your first name.
            </p>
          </FormField>

          <FormField label="Last name">
            <input type="text" id="lastName" name="lastName"
              onChange={this.handleInputChange} value={this.state.lastName || ''} />

            <p>
              Your last name.
            </p>
          </FormField>

          <Button type="submit">
            Save
          </Button>
        </Form>
      </MainLayout>
    );
  }
}

EditProfile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

