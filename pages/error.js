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

export class Error extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <title>Error</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav title="Home" />

        <Hero>
          <Title>Error!</Title>
          <Description>
            Noooooooo! Why was there an error? There shouldn&apos;t be errors!
          </Description>
        </Hero>
      </div>
    );
  }
}

export default Error;

