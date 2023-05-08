import React, { FC } from "react";
import styled from "styled-components";

import Header, { NavigationLink } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const navLinks: NavigationLink[] = [
    {
      label: "~/",
      href: "/",
    },
    {
      label: "🤔",
      href: "/#what-i-do",
    },
    {
      label: "📍",
      href: "/#where-i've-done-it",
    },
    {
      label: "💻",
      href: "/#how-i-do-it",
    },
    {
      label: "/etc",
      href: "/#etc",
    },
  ];

  return (
    <Container>
      <Header navLinks={navLinks} />
      {children}
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export default Layout;
