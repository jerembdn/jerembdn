import Head from 'next/head';
import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  emoji?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Page: FC<Props> = ({ emoji, title, subtitle, children }: Props) => {
  return (
    <Container>
      <Head>
        <title>Jérémy Baudrin - {title}</title>
      </Head>
      <Title>{emoji && `${emoji} `}{title}</Title>
      <Subtitle>&gt; <span>{subtitle}</span></Subtitle>
      {children}
    </Container>
  );
};

const Container = styled.article`
  flex: 1;
  margin: 20px 0 0 100px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.h2`
  margin: 5px 0 0 0;
  font-size: 18px;
  font-weight: 400;
  
  span {
    color: #cb0000;
  }
`;

export default Page;