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
const ResetPasswordForm = styled.form`
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

/* istanbul ignore next */
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;

export class ResetPassword extends React.Component {

  static async getInitialProps(context) {
    const { token } = context.query;
    return { token };
  }

  constructor(props) {
    super(props);

    this.state = {
      token: props.token
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.setAuthError(false);
  };

  submit = (e) => {
    e.preventDefault();
    this.props.resetPassword(this.state);
    trackEvent('auth', 'reset password', 'password reset submitted');
  };

  render() {
    return (
      <CenteredLayout title="Reset password">
        <ResetPasswordForm onSubmit={this.submit} autoComplete="off">
          <Logo height="108px" />

          <h2>
            Password reset
          </h2>

          <Link href="/login">
            <a>
              back to login
            </a>
          </Link>

          <DescriptionText>
            Use the form below to reset your password. Once completed, you can use your new password to log in.
          </DescriptionText>

          <FormField label="Email">
            <input type="email" id="email" name="email" required
              onChange={this.handleInputChange} value={this.state.email || ''} />
          </FormField>

          <FormField label="New password">
            <input type="password" id="newPassword" name="newPassword" required
              onChange={this.handleInputChange} value={this.state.newPassword || ''} />
          </FormField>

          <FormField label="Confirm password">
            <input type="password" id="confirmPassword" name="confirmPassword" required
              onChange={this.handleInputChange} value={this.state.confirmPassword || ''} />
          </FormField>

          {this.state.confirmPassword && this.state.newPassword !== this.state.confirmPassword ? (
            <ErrorMessage id="password-match-error">
              Passwords must match
            </ErrorMessage>
          ) : (this.props.authError &&
            <ErrorMessage id="login-error">
              Couldn&apos;t create account. Please try again later!
            </ErrorMessage>
          )}

          <Button type="submit" disabled={!this.state.email || !this.state.newPassword || this.state.newPassword !== this.state.confirmPassword}>
            Set password
          </Button>
        </ResetPasswordForm>
      </CenteredLayout>
    );
  }
}

ResetPassword.propTypes = {
  token: PropTypes.string,
  authError: PropTypes.bool,
  setAuthError: PropTypes.func,
  resetPassword: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.appState,
    ...state.authState
  };
};

const mapDispatchToProps = {
  ...authActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

