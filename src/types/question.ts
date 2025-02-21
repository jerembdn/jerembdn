import React from "react";
import { Sender } from "./sender";

export type Question = {
  code: string;
  question: string;
  answers: {
    sender: Sender,
    content: JSX.Element | React.ReactNode[] | string;
  }[];
};
