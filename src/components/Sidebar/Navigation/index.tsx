import React, { FC } from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import Link from 'components/Link';

type NavigationLink = {
  name: string;
  label?: string;
  path: string;
};

type NavigationGroup = {
  name: string;
  links: NavigationLink[];
};

type Props = {
  groups: NavigationGroup[];
};

const Navigation: FC<Props> = ({ groups }: Props) => {
  const { pathname } = useRouter();

  return (
    <Container>
      <NavItems>
        {groups.map(({ name, links }: NavigationGroup, index) => (
          <NavGroup key={index}>
            <NavGroupTitle>{name}</NavGroupTitle>
            <NavItems>
              {links.map(({ name, label = name, path }: NavigationLink) => (
                <NavItem key={name}>
                  <NavLink href={path} active={pathname === path}>{label}</NavLink>
                </NavItem>
              ))}
            </NavItems>
          </NavGroup>
        ))}
      </NavItems>
    </Container>
  );
};

const Container = styled.nav``;

const NavGroup = styled.li`
  margin-bottom: 30px;
`;

const NavGroupTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

const NavItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 15px;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)<{ active: boolean }>`
  ${({ active }) => active && 'color: #cb0000;'}
`;

export type { NavigationGroup };
export default Navigation;