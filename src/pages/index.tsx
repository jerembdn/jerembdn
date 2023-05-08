import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import EtcSection from "@/components/EtcSection";
import Page from "@/components/Page";
import Section from "@/components/Section";

const HomePage: NextPage = () => {
  return (
    <Page>
      <Title>Jérémy Baudrin, web developer.</Title>

      <Section title={"what i do"} emoji={"🤔"}>
        <Text>Hey i&apos;m Jeremy, a 22 y/o french software engineer.</Text>
        <br />
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
        <br />
        <Text>
          On a personnal plan, i like to travels and visits monuments in cities
          history, and i like night activity, drinking and parties (my friends
          told me that i’m alcoholic but i&apos;m just in love with good things
          imo). Otherwise i do sports like ski, table-tennis, running and
          musculation.
        </Text>
      </Section>

      <Section title="where i’ve done it" emoji={"📍"}>
        ...wip
      </Section>

      <Section title="how i do it" emoji={"💻"}>
        <Text>
          I highly leverage new bleeding-edge technologies and languages such as
          TypeScript or Elixir to stay on top of the game.
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
  display: none;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const List = styled.ul`
  list-style: inside;
  padding-left: 20px;
`;

export default HomePage;
