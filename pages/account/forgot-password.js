import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';

import { trackEvent } from '@lib/analytics';

import { authActions } from '@redux/actions';

import { CenteredLayout } from '@components/layout';
import { Logo, Button, FormField } from '@components/elements';

/* istanbul ignore next */
const ForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;

  input {
    margin-left: 0 !important;
  }
`;

/* istanbul ignore next */
const DescriptionText = styled.p`
  text-align: center;
`;

export class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.forgotPassword(this.state);
    trackEvent('auth', 'forgot password', 'forgot password form submitted');
  };

  render() {
    return (
      <CenteredLayout title="Forgot password">
        <ForgotPasswordForm onSubmit={this.submit} autoComplete="off">
          <Logo height="108px" />

          <h2>
            Forgot password
          </h2>

          <Link href="/login">
            <a>
              back to login
            </a>
          </Link>

          <DescriptionText>
            Please enter your email address. We&apos;ll send a link to reset your password.
          </DescriptionText>

          <FormField>
            <input type="text" id="email" name="email" required placeholder="Email"
              onChange={this.handleInputChange} value={this.state.email} />
          </FormField>

          <Button type="submit">
            Submit
          </Button>
        </ForgotPasswordForm>
      </CenteredLayout>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.appState,
  };
};

const mapDispatchToProps = {
  ...authActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

