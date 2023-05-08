import React from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

import ActivityCard from "@/components/Activity/Card";
import Link from "@/components/Link";
import { DISCORD } from "@/constants";
import { Activity } from "@/types/activity";
import { APIResponse } from "@/types/api/api-response";

type NavigationLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavigationLink[];
};

const Header: React.FC<Props> = ({ navLinks }: Props) => {
  const [activity, setActivity] = React.useState<Activity | undefined>();

  React.useEffect(() => {
    axios
      .get(`/api/presence/${DISCORD.USER_ID}`)
      .then((res: AxiosResponse<APIResponse<Activity>>) => {
        if (
          res.status === 200 &&
          res.data &&
          res.data.success &&
          res.data.data
        ) {
          return res.data.data;
        } else {
          throw new Error("Unable to fetch activity");
        }
      })
      .then((data: Activity) => {
        setActivity(data);
      });
  }, []);

  return (
    <Container>
      <Brand>
        <Logo
          alt="Jérémy Baudrin"
          src={"/static/logo/brand.jpg"}
          width={75}
          height={75}
        />
        {activity && (
          <ActivityContainer>
            <ActivityCard activity={activity} />
          </ActivityContainer>
        )}
      </Brand>

      <Navigation>
        <NavLinks>
          {navLinks.map((link: NavigationLink, index: number) => (
            <NavLink key={index}>
              <Link href={link.href}>{link.label}</Link>
            </NavLink>
          ))}
        </NavLinks>
      </Navigation>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 0 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0 20px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 20px;
  }
`;

const Logo = styled.img`
  border: 3px solid ${({ theme }) => theme.colors.info};
  border-radius: 50px;
  object-fit: contain;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 50px;
    height: auto;
    border: 2px solid ${({ theme }) => theme.colors.info};
  }
`;

const ActivityContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin: 0 10px;
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.medium};

  &:first-child {
    margin-left: 0;
  }
`;

export type { NavigationLink };
export default Header;
