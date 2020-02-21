import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { trackEvent } from '@lib/analytics';

import { authActions } from '@redux/actions';

import { Button, FormField, LoadingSpinner } from '@components/elements';

/* istanbul ignore next */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 120px 20px;
`;

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
const LoadingSpinnerWrapper = styled.div`
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/* istanbul ignore next */
const DescriptionText = styled.p`
  text-align: center;
`;

const messages = defineMessages({
  pageTitleText: {
    id: 'forgot-password.page-title',
    defaultMessage: 'Forgot password',
    description: 'Page title',
  },
  emailLabelText: {
    id: 'forgot-password.email',
    defaultMessage: 'Email',
    description: 'Form field label'
  },
  backText: {
    id: 'forgot-password.back',
    defaultMessage: 'back to login',
    description: 'Back link'
  }
});

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
  }

  submit = (e) => {
    e.preventDefault();
    this.props.forgotPassword(this.state);
    trackEvent('auth', 'forgot password', 'forgot password form submitted');
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <Wrapper>
        <Head>
          <title>
            {formatMessage(messages.pageTitleText)}
          </title>
        </Head>

        {this.props.loading ?
            <LoadingSpinnerWrapper>
              <LoadingSpinner size={42} />
            </LoadingSpinnerWrapper>
            :
            <ForgotPasswordForm onSubmit={this.submit} autoComplete="off">
              <img src="/images/logo-blue.png" alt="Logo" />

              <h2>
                <FormattedMessage id="forgot-password.title" defaultMessage="Forgot password" description="Page title" />
              </h2>

              <Link href="/login">
                <a>
                  {formatMessage(messages.backText)}
                </a>
              </Link>

              <DescriptionText>
                <FormattedMessage id="forgot-password.description" defaultMessage="Please enter your email address. We'll send a link to reset your password." description="Email description text" />
              </DescriptionText>

              <FormField>
                <input type="text" id="email" name="email" required placeholder={formatMessage(messages.emailLabelText)}
                  onChange={this.handleInputChange} value={this.state.email} />
              </FormField>

              <Button type="submit">
                <FormattedMessage id="forgot-password.submit" defaultMessage="Submit" description="Form submit button" />
              </Button>
            </ForgotPasswordForm>
        }
      </Wrapper>
    );
  }
}

ForgotPassword.propTypes = {
  intl: PropTypes.object,
  loading: PropTypes.bool,
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ForgotPassword));

