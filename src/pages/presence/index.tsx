import React from "react";
import { NextPage } from "next";
import { styled } from "styled-components";

import Link from "@/components/Link";
import Page from "@/components/Page";
import Section from "@/components/Section";

const PresencePage: NextPage = () => {
  return (
    <Page>
      <Section title="Presence" emoji={"👀"}>
        <Text>
          You may have noticed that while I&apos;m doing something like
          listening to Spotify, programming in VSCode or playing a game,
          it&apos;ll appear in the bottom left of my site. This is thanks to an
          open-source project called{" "}
          <Link href={"https://github.com/phineas/lanyard"}>Lanyard</Link> which
          pulls live presences from Discord and updates an API and WebSocket
          service. It takes {"<10"} seconds to set up, you just have to join a
          Discord server!
        </Text>
      </Section>
    </Page>
  );
};

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default PresencePage;
