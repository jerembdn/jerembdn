import React from "react";
import { Container } from "kitchn";
import type { NextPage } from "next";

import Conversation from "../../components/marketing/message/conversation";

const HomeScreen: NextPage = () => {
  return (
    <>
      <Container as={"main"} maxWidth={600} mx={"auto"}>
        <Conversation />
      </Container>
    </>
  );
};

export default HomeScreen;
