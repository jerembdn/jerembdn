"use client";

import type React from "react";
import kitchn, { Avatar, Container } from "kitchn";
import { Sender } from "../../../../types/sender";

export type MessageGroupProps = React.PropsWithChildren<{
  sender?: Sender;
}>;

const MessageGroup: React.FC<MessageGroupProps> = ({
  children,
  sender,
}: MessageGroupProps) => (
  <Wrapper row sender={sender} gap={10} align={"flex-end"}>
    {sender && <Avatar src={sender.avatarUrl} size={40} />}

    <MessagesList
      flex={1}
      gap={5}
      sender={sender}
      maxWidth={"calc(100% - 10px - 40px)"}
    >
      {children}
    </MessagesList>
  </Wrapper>
);

const Wrapper = kitchn(Container)<{ sender?: Sender }>`
  transition: all 0.3s;

  ${({ sender }) => `
    flex-direction: ${sender ? "row" : "row-reverse"};
  `}
`;

const MessagesList = kitchn(Container)<{ sender?: Sender }>`
  ${({ sender }) => `
    align-items: ${sender ? "flex-start" : "flex-end"};
  `}

  & > * {
    ${({ sender, theme }) => `
      background-color: ${
        sender ? theme.colors.accent.primary : theme.colors.accent.light
      };
      color: ${sender ? theme.colors.text.lightest : "#000"};
    `}
  }

  & > *:first-child {
    ${({ sender }) => `
      border-top-${!sender ? "right" : "left"}-radius: 12px;
      border-bottom-${!sender ? "right" : "left"}-radius: 12px;
    `}
  }

  & > *:last-child {
    ${({ sender }) => `
      border-top-${!sender ? "right" : "left"}-radius: 12px;
      border-bottom-${!sender ? "right" : "left"}-radius: 12px;
    `}
  }

  & > *:not(:first-child):not(:last-child) {
    border-left: 5px;
  }

  & > *:not(:first-child) {
    ${({ sender }) => `
      border-top-${!sender ? "right" : "left"}-radius: 5px;
    `}
  }

  & > *:not(:last-child) {
    ${({ sender }) => `
      border-bottom-${!sender ? "right" : "left"}-radius: 5px;
    `}
  }
`;

export default MessageGroup;
