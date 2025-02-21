"use client";

import type React from "react";
import { KitchnProvider } from "kitchn";

import { ConversationProvider } from "../../../contexts/conversation.context";

export type ProvidersProps = React.PropsWithChildren;

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return (
    <KitchnProvider>
      <ConversationProvider>{children}</ConversationProvider>
    </KitchnProvider>
  );
};

export default Providers;
