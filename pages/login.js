import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

export class Login extends React.Component {

  static async getInitialProps(context) {
    const { redirect } = context.query;
    return { redirect };
  }

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
  };

  submit = (e) => {
    e.preventDefault();
    const { redirect } = this.props;
    const credentials = {
      ...this.state
    };
    this.props.login(credentials, redirect);
  };

  render() {
    return (
      <CenteredLayout title="Login">
        <LoginForm onSubmit={this.submit}>
          <Logo />

          <h2>
            Login
          </h2>

          <Link href="/onboarding/create-account">
            <a>
              or create account
            </a>
          </Link>

          <FormField label="Email">
            <input type="email" id="email" name="email"
              onChange={this.handleInputChange} value={this.state.email} />
          </FormField>

          <FormField label="Password">
            <input type="password" id="password" name="password"
              onChange={this.handleInputChange} value={this.state.password} />
          </FormField>

          <Link href="/account/forgot-password" passHref>
            <ForgotPasswordLink>
              Forgot password?
            </ForgotPasswordLink>
          </Link>

          {this.props.authError &&
              <ErrorMessage id="login-error">
                Login failed
              </ErrorMessage>
          }

          <Button type="submit">
            Login
          </Button>
        </LoginForm>
      </CenteredLayout>
    );
  }
}

Login.propTypes = {
  redirect: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

