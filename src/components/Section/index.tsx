import React from "react";
import slugify from "slugify";
import styled from "styled-components";

import Link from "@/components/Link";

type Props = {
  title: string;
  emoji?: string;
  children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, emoji, children }: Props) => {
  const slugifiedTitle: string = slugify(title);

  return (
    <Container id={slugifiedTitle}>
      <Title>
        <Link href={`/#${slugifiedTitle}`}>
          {emoji ? `${emoji} ` : ""}
          {title}
        </Link>
      </Title>
      {children}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  margin-bottom: 30px;
`;

export default Section;
