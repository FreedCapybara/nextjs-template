import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  };

  submit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    return (
      <CenteredLayout title="Create account">
        <RegisterForm onSubmit={this.submit} autoComplete="off">
          <Logo />

          <h2>
            Create account
          </h2>

          <Link href="/login">
            <a>or log in</a>
          </Link>

          <FormField label="Email">
            <input type="email" id="email" name="email" required
              onChange={this.handleInputChange} value={this.state.email} />
          </FormField>

          <FormField label="Password">
            <input type="password" id="password" name="password" required
              onChange={this.handleInputChange} value={this.state.password} />
          </FormField>

          <FormField label="Confirm password">
            <input type="password" id="confirmPassword" name="confirmPassword" required
              onChange={this.handleInputChange} value={this.state.confirmPassword} />
          </FormField>

          {this.state.confirmPassword && this.state.password !== this.state.confirmPassword ? (
            <ErrorMessage id="password-match-error">
              Passwords must match
            </ErrorMessage>
          ) : (this.props.authError &&
            <ErrorMessage id="login-error">
              Couldn&apos;t create account. Please try again later!
            </ErrorMessage>
          )}

          <Button type="submit" disabled={!this.state.email || this.state.password !== this.state.confirmPassword}>
            Create account
          </Button>
        </RegisterForm>
      </CenteredLayout>
    );
  }
}

CreateAccount.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);

