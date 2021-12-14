import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  emoji?: string;
  title: string;
  children: React.ReactNode;
};

const Page: FC<Props> = ({ emoji, title, children }: Props) => {
  return (
    <Container>
      <Title>{emoji && `${emoji} `}{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.article`
  flex: 1;
  height: 100vh;
  margin-left: 100px;
`;

const Title = styled.h1`
`;

export default Page;