import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  emoji: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

const EtcSection: React.FC<Props> = ({
  title,
  emoji,
  children,
  ...props
}: Props) => {
  return (
    <Container {...props}>
      <Title>{`${emoji} ${title}`}</Title>
      {children}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.medium};
  margin-bottom: 20px;
`;

export default EtcSection;
