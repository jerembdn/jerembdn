import React from "react";

import {
  ConversationContext,
  type ConversationContextType,
} from "../contexts/conversation.context";

export const useConversation = (): ConversationContextType => {
  const context = React.useContext(ConversationContext);

  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }

  return context;
};
