import type React from "react";
import { Container } from "kitchn";

export type MessageProps = React.PropsWithChildren;

const Message: React.FC<MessageProps> = ({ children }: MessageProps) => {
  return (
    <Container
      backgroundAccent="primary"
      padding={"9px 12px"}
      borderRadius={"12px"}
      display="inline"
    >
      {children}
    </Container>
  );
};

export default Message;
