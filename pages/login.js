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
const LoginForm = styled.form`
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

/* istanbul ignore next */
const ForgotPasswordLink = styled.a`
  transform: translateY(-24px);
`;

const messages = defineMessages({
  pageTitleText: {
    id: 'login.page-title',
    defaultMessage: 'Login',
    description: 'Page title',
  },
  createAccountText: {
    id: 'login.create-account',
    defaultMessage: 'or create account',
    description: 'Sign up link'
  },
  emailLabelText: {
    id: 'login.email',
    defaultMessage: 'Email',
    description: 'Form field label'
  },
  passwordLabelText: {
    id: 'login.password',
    defaultMessage: 'Password',
    description: 'Form field label'
  },
  forgotPasswordText: {
    id: 'login.forgot-password',
    defaultMessage: 'Forgot password?',
    description: 'Forgot password link'
  }
});

export class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit = (e) => {
    e.preventDefault();
    const credentials = {
      ...this.state
    };
    this.props.login(credentials);
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <CenteredLayout title={formatMessage(messages.pageTitleText)}>
        <LoginForm onSubmit={this.submit}>
          <Logo />

          <h2>
            <FormattedMessage id="login.title" defaultMessage="Login" description="Page title" />
          </h2>

          <Link href="/onboarding/create-account">
            <a>
              {formatMessage(messages.createAccountText)}
            </a>
          </Link>

          <FormField label={formatMessage(messages.emailLabelText)}>
            <input type="email" id="email" name="email"
              onChange={this.handleInputChange} value={this.state.email} />
          </FormField>

          <FormField label={formatMessage(messages.passwordLabelText)}>
            <input type="password" id="password" name="password"
              onChange={this.handleInputChange} value={this.state.password} />
          </FormField>

          <Link href="/account/forgot-password" passHref>
            <ForgotPasswordLink>
              {formatMessage(messages.forgotPasswordText)}
            </ForgotPasswordLink>
          </Link>

          {this.props.authError &&
              <ErrorMessage id="login-error">
                <FormattedMessage id="login.error" defaultMessage="Login failed" description="Login error message" />
              </ErrorMessage>
          }

          <Button type="submit">
            <FormattedMessage id="login.submit" defaultMessage="Login" description="Login submit button" />
          </Button>
        </LoginForm>
      </CenteredLayout>
    );
  }
}

Login.propTypes = {
  intl: PropTypes.object,
  authError: PropTypes.bool,
  loading: PropTypes.bool,
  login: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login));

