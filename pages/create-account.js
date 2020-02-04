import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import Link from 'next/link';
import styled from 'styled-components';

import { authActions } from '@redux/actions';
import { CenteredLayout } from '@components/layout';
import { Logo, FormField, Button } from '@components/elements';

/* istanbul ignore next */
const RegisterForm = styled.form`
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
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;

const messages = defineMessages({
  pageTitleText: {
    id: 'create-account.page-title',
    defaultMessage: 'Create account',
    description: 'Page title',
  },
  login: {
    id: 'create-account.login',
    defaultMessage: 'or log in',
    description: 'Login link'
  },
  emailLabelText: {
    id: 'create-account.email',
    defaultMessage: 'Email',
    description: 'Form field label'
  },
  passwordLabelText: {
    id: 'create-account.password',
    defaultMessage: 'Password',
    description: 'Form field label'
  },
  confirmPasswordLabelText: {
    id: 'create-account.confirm-password',
    defaultMessage: 'Confirm password',
    description: 'Form field label'
  }
});

export class CreateAccount extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
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
    this.props.register(this.state);
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <CenteredLayout title={formatMessage(messages.pageTitleText)}>
        <RegisterForm onSubmit={this.submit} autoComplete="off">
          <Logo />

          <h2>
            <FormattedMessage id="create-account.title" defaultMessage="Create account" description="Page title" />
          </h2>

          <Link href="/login">
            <a>
              {formatMessage(messages.login)}
            </a>
          </Link>

          <FormField label={formatMessage(messages.emailLabelText)}>
            <input type="email" id="email" name="email" required
              onChange={this.handleInputChange} value={this.state.email} />
          </FormField>

          <FormField label={formatMessage(messages.passwordLabelText)}>
            <input type="password" id="password" name="password" required
              onChange={this.handleInputChange} value={this.state.password} />
          </FormField>

          <FormField label={formatMessage(messages.confirmPasswordLabelText)}>
            <input type="password" id="confirmPassword" name="confirmPassword" required
              onChange={this.handleInputChange} value={this.state.confirmPassword} />
          </FormField>

          {this.state.confirmPassword && this.state.password !== this.state.confirmPassword ? (
            <ErrorMessage id="password-match-error">
              <FormattedMessage id="create-account.password-match" defaultMessage="Passwords must match" description="Password match error message" />
            </ErrorMessage>
          ) : (this.props.authError &&
            <ErrorMessage id="login-error">
              <FormattedMessage id="create-account.error" defaultMessage="Couldn't create account. Please try again later!" description="Registration error message" />
            </ErrorMessage>
          )}

          <Button type="submit" disabled={!this.state.email || this.state.password !== this.state.confirmPassword}>
            <FormattedMessage id="create-account.submit" defaultMessage="Create account" description="Registration submit button" />
          </Button>
        </RegisterForm>
      </CenteredLayout>
    );
  }
}

CreateAccount.propTypes = {
  intl: PropTypes.object,
  authError: PropTypes.bool,
  setAuthError: PropTypes.func,
  register: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CreateAccount));

