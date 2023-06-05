import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import EtcSection from "@/components/EtcSection";
import Page from "@/components/Page";
import ProjectCard from "@/components/Project/Card";
import Section from "@/components/Section";
import { PROJECTS } from "@/constants/projects";
import { GlobalThemeContext } from "@/contexts/GlobalTheme";
import { Project } from "@/types/project";
import { getAge } from "@/utils/getAge";

const HomePage: NextPage = () => {
  const { globalTheme, switchTheme } = React.useContext(GlobalThemeContext);

  const ageXD = React.useMemo(() => {
    const jijonBirthDate = new Date("2001-07-05");
    return getAge(jijonBirthDate);
  }, []);

  const handleSwitchTheme = React.useCallback(() => {
    switchTheme(globalTheme.id === 0 ? "light" : "dark");
  }, [globalTheme, switchTheme]);

  return (
    <Page>
      <Title>
        Jérémy Baudrin,{" "}
        <Subtitle>
          web developer{" "}
          <ThemeSwitcher onClick={handleSwitchTheme}>
            {
              {
                0: "🌙",
                1: "☀️",
              }[globalTheme.id]
            }
          </ThemeSwitcher>
          .
        </Subtitle>
      </Title>

      <Section title={"what i do"} emoji={"🤔"}>
        <Text>
          Hey i&apos;m Jérémy, a {ageXD} y/o french software engineer.
        </Text>
        <Text>
          I design, build and publish projects of quality and reliability.
          currently, i’m working on{" "}
          <Link href={"https://tonightpass.com"}>tonight pass</Link>. I’m
          specialized in backend features. I love the way that the machine
          communicate with human and other machines, the way there’re all
          connected on networks and controls apps. I do a lot of graphql and i
          mainly work with <Link href={"https://nestjs.com/"}>nest.js</Link>{" "}
          framework.
        </Text>
        <Text>
          On a personnal plan, i like to travels and visits monuments in
          historic cities, i like night activities, drinking and go to parties
          (my friends told me that i’m alcoholic but i&apos;m just in love with
          good things imo). Otherwise i do sports like ski, table-tennis,
          running and musculation.
        </Text>
      </Section>

      <Section title="where i’ve done it" emoji={"📍"}>
        <ProjectsList>
          {PROJECTS.map((project: Project) => (
            <ProjectItem key={project.id}>
              <ProjectCard project={project} />
            </ProjectItem>
          ))}
        </ProjectsList>
      </Section>

      <Section title="how i do it" emoji={"💻"}>
        <Text>
          I highly leverage new bleeding-edge technologies and languages such as
          Next.JS, GraphQL or Elixir to stay on top of the game.
        </Text>
        <Text>
          You can find a list of my most-used frameworks and languages below.
        </Text>
        <br />
        ...wip
      </Section>

      <Section title="/etc">
        <EtcSection title={"thank you !"} emoji={"🤝"} style={{ margin: 0 }}>
          <Text>
            Thanks for visiting my website, I hope you enjoyed your stay !
          </Text>
          <Text>
            The source code for this website is available at{" "}
            <Link href={"https://github.com/jerembdn"}>
              github.com/jerembdn
            </Link>
          </Text>
        </EtcSection>

        <EtcSection title={"contact"} emoji={"📧"}>
          <Text>You can contact me anytime on theses medias :</Text>

          <List>
            <li>
              <Link href={"https://www.linkedin.com/in/jeremybdn/"}>
                linkedin
              </Link>
            </li>
            <li>
              <Link href={"https://discord.gg/ucX9c5yXmX"}>discord</Link>
            </li>
            <li>
              <Link href={"https://twitter.com/jeremdotjs"}>twitter</Link>
            </li>
            <li>
              <Link href={"https://instagram.com/jrmbdn"}>instagram</Link>
            </li>
          </List>

          <br />
          <Text>
            Otherwise you can also send me a mail at{" "}
            <Link href={"mailto:work@jeremybdn.fr"}>work@jeremybdn.fr</Link>
          </Text>
        </EtcSection>

        <EtcSection title={"more"} emoji={"🧭"}>
          <List>
            <li>
              <Link href={"/presence"}>/presence</Link>
            </li>
            <li>
              <Link href={"https://onruntime.com"}>onRuntime Studio</Link>
            </li>
          </List>
        </EtcSection>
      </Section>
    </Page>
  );
};

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.extraTitle};
  font-weight: ${({ theme }) => theme.weight.bold};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.title};
  }
`;

const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.large};
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};

  margin: 5px 0;
`;

const List = styled.ul`
  list-style: inside;
  padding-left: 20px;
`;

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
`;

const ProjectItem = styled.li``;

const ThemeSwitcher = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background.primary};
  user-select: none;
`;

export default HomePage;
