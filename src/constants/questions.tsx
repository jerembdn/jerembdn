import { Spacer, Text } from "kitchn";

import React from "react";
import type { Question } from "@/types/question";
import Senders from "./senders";
import Link from "@/components/ui/link";
import Routes from "./routes";
import renderSkills from "@/utils/render-skills";
import Skills from "./skills";

const Questions: Question[] = [
  {
    code: "what-ive-done",
    question: "🤔 What do you do ?",
    answers: [
      {
        sender: Senders.jeremy,
        content: 
          <>
            I design, build and publish projects of quality and reliability.
            Currently, i’m working on{" "}
            <Link href={Routes.external.tonightpass}>tonight pass</Link> and{" "}
            <Link href={Routes.external.thegreensuits}>the green suits</Link>. I’m
            specialized in backend development, interested in things like sys.
            admin., networks and language specifications.
          </>,
      },
      {
        sender: Senders.jeremy,
        content: "On a personnal plan, i like to travels and visits monuments in historic cities, i like night activities and parties. Otherwise i do sports like ski, table-tennis, running and musculation.",
      },
    ],
  },
  {
    code: "how-ive-done",
    question: "📍 How you've done it ?",
    answers: [
      {
        sender: Senders.jeremy,
        content: "I highly leverage new bleeding-edge technologies and languages such as Next.JS, GraphQL or Elixir to stay on top of the game. Here's a list of my most-used frameworks and languages:",
      },
      {
        sender: Senders.jeremy,
        content:
          <>
            <Text>🔣 Languages:</Text>
            <Spacer y={1} />
            {...renderSkills(Skills.filter((skill) => skill.type === "language"))}
          </>,
      },
      {
        sender: Senders.jeremy,
        content:
          <>
            <Text>🧩 Frameworks:</Text>
            <Spacer y={1} />
            {...renderSkills(Skills.filter((skill) => skill.type === "framework"))}
          </>,
      },
    ],
  },
  /* {
    code: "where-ive-done",
    question: "💻 Where you've done it ?",
    answers: ["I've done it in a lot of places, but mostly in Paris."],
  },
  {
    code: "awesome-website",
    question: "👏 Awesome website !",
    answers: ["Thank you !"],
  },
  {
    code: "i-want-to-work-with-you",
    question: "🤝 I want to work with you !",
    answers: ["Great ! Let's get in touch !"],
  }, */
];

export default Questions;