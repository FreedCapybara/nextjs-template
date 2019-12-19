import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import Head from 'next/head';
import styled from 'styled-components';

import { exampleActions } from '@redux/actions';

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

const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

/* istanbul ignore next */
const Card = styled.a`
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/* istanbul ignore next */
const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;

const CardDescription = styled.p`
  margin: 0;
  padding: 12px 0 0;
  font-size: 13px;
  color: #333;
`;

const pageTitle = {
  id: 'index.page-title',
  defaultMessage: 'Home',
  description: 'Page title',
};

export class Home extends React.Component {

  componentDidMount() {
    this.props.exampleSaga();
  }

  decrement = () => {
    this.props.decrement();
  }

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
            <FormattedMessage id="index.hero-title" defaultMessage="Welcome to Next.js!" description="Hero title" />
          </Title>
          <Description>
            <FormattedMessage id="index.hero-description" defaultMessage="To get started, edit pages/index.js and save to reload." description="Hero description" />
          </Description>

          <Row>
            <Card href="https://nextjs.org/docs">
              <CardTitle>
                <FormattedMessage id="index.documentation-title" defaultMessage="Documentation" description="Card title" />
              </CardTitle>
              <CardDescription>
                <FormattedMessage id="index.documentation-description" defaultMessage="Learn more about Next.js in the documentation." description="Card description" />
              </CardDescription>
            </Card>
            <Card href="https://nextjs.org/learn">
              <CardTitle>
                <FormattedMessage id="index.learn-title" defaultMessage="Next.js Learn" description="Card title" />
              </CardTitle>
              <CardDescription>
                <FormattedMessage id="index.learn-description" defaultMessage="Learn about Next.js by following an interactive tutorial!" description="Card description" />
              </CardDescription>
            </Card>
            <Card href="https://github.com/zeit/next.js/tree/master/examples">
              <CardTitle>
                <FormattedMessage id="index.examples-title" defaultMessage="Examples" description="Card title" />
              </CardTitle>
              <CardDescription>
                <FormattedMessage id="index.examples-description" defaultMessage="Find other example boilerplates on the Next.js GitHub." description="Card description" />
              </CardDescription>
            </Card>
          </Row>

          <Row>
            <Description>
              <FormattedMessage id="index.example-saga-label" defaultMessage="Count:" description="Data label" /> {this.props.count}
            </Description>
            <button onClick={this.decrement}>
              <FormattedMessage id="index.example-saga-button" defaultMessage="Decrement!" description="Button text" />
            </button>
          </Row>
        </Hero>
      </div>
    );
  }
}

Home.propTypes = {
  intl: PropTypes.object,
  count: PropTypes.number,
  decrement: PropTypes.func,
  exampleSaga: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.exampleState
  };
};

const mapDispatchToProps = {
  ...exampleActions
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Home));

