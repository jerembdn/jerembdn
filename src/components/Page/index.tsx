import React, { FC } from "react";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Page: FC<Props> = ({ title, children }: Props) => {
  return (
    <Container>
      <Head>
        <title>Jérémy Baudrin{title ? ` - ${title}` : ""}</title>
      </Head>

      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 120px 50px 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0 20px 50px 20px;
  }
`;

export default Page;
