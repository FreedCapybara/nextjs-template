import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';

import { Nav } from '@components/nav';

const Hero = styled.div`
  width: 100%;
  color: #333;
`;

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const pageTitle = {
  id: 'login.page-title',
  defaultMessage: 'Login',
  description: 'Page title',
};

export class Login extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <title>
            {this.props.intl.formatMessage(pageTitle)}
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav intl={this.props.intl} />

        <Hero>
          <Title>
            <FormattedMessage id="login.title" defaultMessage="Login" description="Page title" />
          </Title>
          <Description>
            <FormattedMessage id="login.description" defaultMessage="Coming soon" description="Page description" />
          </Description>
        </Hero>
      </div>
    );
  }
}

Login.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(Login);

