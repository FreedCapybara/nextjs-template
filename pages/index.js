import React from 'react';
import Head from 'next/head';
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

const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

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

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav title="Logo" />

        <Hero>
          <Title>Welcome to Next.js!</Title>
          <Description>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </Description>

          <Row>
            <Card href="https://nextjs.org/docs">
              <CardTitle>Documentation &rarr;</CardTitle>
              <CardDescription>Learn more about Next.js in the documentation.</CardDescription>
            </Card>
            <Card href="https://nextjs.org/learn">
              <CardTitle>Next.js Learn &rarr;</CardTitle>
              <CardDescription>Learn about Next.js by following an interactive tutorial!</CardDescription>
            </Card>
            <Card href="https://github.com/zeit/next.js/tree/master/examples">
              <CardTitle>Examples &rarr;</CardTitle>
              <CardDescription>Find other example boilerplates on the Next.js GitHub.</CardDescription>
            </Card>
          </Row>
        </Hero>
      </div>
    );
  }
}

export default Home;

