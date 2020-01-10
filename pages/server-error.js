import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
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

const messages = defineMessages({
  pageTitle: {
    id: 'error.page-title',
    defaultMessage: 'Error',
    description: 'Page title',
  }
});

export class ServerError extends React.Component {

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <Head>
          <title>
            {formatMessage(pageTitle)}
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav intl={this.props.intl} />

        <Hero>
          <Title>
            <FormattedMessage id="error.title" defaultMessage="Error" description="Page title" />
          </Title>
          <Description>
            <FormattedMessage id="error.description" defaultMessage="Noooooooo! Why was there an error? There shouldn't be errors!" description="Page description" />
          </Description>
        </Hero>
      </div>
    );
  }
}

ServerError.propTypes = {
  intl: PropTypes.object
};

export default injectIntl(ServerError);

