import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
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

const messages = defineMessages({
  pageTitleText: {
    id: 'reset-password.page-title',
    defaultMessage: 'Reset password',
    description: 'Page title',
  },
  emailLabelText: {
    id: 'reset-password.email',
    defaultMessage: 'Email',
    description: 'Form field label'
  },
  passwordLabelText: {
    id: 'reset-password.password',
    defaultMessage: 'New password',
    description: 'Form field label'
  },
  confirmPasswordLabelText: {
    id: 'reset-password.confirm-password',
    defaultMessage: 'Confirm password',
    description: 'Form field label'
  },
  backText: {
    id: 'reset-password.back',
    defaultMessage: 'back to login',
    description: 'Back link'
  }
});

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
  }

  submit = (e) => {
    e.preventDefault();
    this.props.resetPassword(this.state);
    trackEvent('auth', 'reset password', 'password reset submitted');
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <CenteredLayout title={formatMessage(messages.pageTitleText)}>
        <ResetPasswordForm onSubmit={this.submit} autoComplete="off">
          <Logo height="108px" />

          <h2>
            <FormattedMessage id="reset-password.title" defaultMessage="Password reset" description="Page title" />
          </h2>

          <Link href="/login">
            <a>
              {formatMessage(messages.backText)}
            </a>
          </Link>

          <DescriptionText>
            <FormattedMessage id="reset-password.description" defaultMessage="Use the form below to reset your password. Once completed, you can use your new password to log in." description="Email description text" />
          </DescriptionText>

          <FormField label={formatMessage(messages.emailLabelText)}>
            <input type="email" id="email" name="email" required
              onChange={this.handleInputChange} value={this.state.email || ''} />
          </FormField>

          <FormField label={formatMessage(messages.passwordLabelText)}>
            <input type="password" id="newPassword" name="newPassword" required
              onChange={this.handleInputChange} value={this.state.newPassword || ''} />
          </FormField>

          <FormField label={formatMessage(messages.confirmPasswordLabelText)}>
            <input type="password" id="confirmPassword" name="confirmPassword" required
              onChange={this.handleInputChange} value={this.state.confirmPassword || ''} />
          </FormField>

          {this.state.confirmPassword && this.state.newPassword !== this.state.confirmPassword ? (
            <ErrorMessage id="password-match-error">
              <FormattedMessage id="reset-password.password-match" defaultMessage="Passwords must match" description="Password match error message" />
            </ErrorMessage>
          ) : (this.props.authError &&
            <ErrorMessage id="login-error">
              <FormattedMessage id="reset-password.error" defaultMessage="Couldn't create account. Please try again later!" description="Registration error message" />
            </ErrorMessage>
          )}

          <Button type="submit" disabled={!this.state.email || !this.state.newPassword || this.state.newPassword !== this.state.confirmPassword}>
            <FormattedMessage id="reset-password.submit" defaultMessage="Set password" description="Change password submit button" />
          </Button>
        </ResetPasswordForm>
      </CenteredLayout>
    );
  }
}

ResetPassword.propTypes = {
  intl: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ResetPassword));

