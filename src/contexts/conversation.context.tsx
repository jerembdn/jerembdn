import React from "react";
import { createContext } from "react";

import type { Message } from "../types/message";
import type { Question } from "../types/question";
import { delay } from "../utils/delay";
import type { Sender } from "../types/sender";
import Senders from "../constants/senders";
import Questions from "../constants/questions";
import { Spacer } from "kitchn";
import { getAge } from "@/utils/get-age";
import Link from "@/components/ui/link";
import Routes from "@/constants/routes";

const birthdate = new Date("2001-05-07");

const defaultMessages: Message[] = [
	{
		id: 1,
		sender: Senders.jeremy,
		content: (
			<>
				Hi! I'm Jeremy, a {getAge(birthdate)}-year-old software engineer.
				Welcome to my personal website 🚀
				<br />
				As you might have noticed, this isn't a commonly seen site—I wanted to
				experiment with a fresh approach inspired by messaging apps. Feel free
				to click around, type in inputs, and explore!
				<Spacer y={1} />
				I'd love to hear your thoughts, so don't hesitate to share your feedback
				<Link href={Routes.external.discord_contact}>here</Link>. Enjoy your
				stay 😊
			</>
		),
	},
];

export type ConversationContextType = {
	messages: Message[];
	remainingQuestions: Question[];
	answering: boolean;
	addMessage: (
		content: React.ReactNode,
		code?: string,
		sender?: Sender,
	) => void;
};

export const ConversationContext = createContext<
	ConversationContextType | undefined
>(undefined);

export type ConversationProviderProps = {
	children: React.ReactNode;
};

export const ConversationProvider: React.FC<ConversationProviderProps> = ({
	children,
}) => {
	const [answering, setAnwsering] = React.useState<boolean>(false);
	const [messages, setMessages] = React.useState<Message[]>(defaultMessages);

	const addMessage = (
		content: React.ReactNode,
		code?: string,
		sender?: Sender,
	) => {
		if (code) {
			// - If message is already in the conversation, do nothing
			if (messages.find((message) => message.code === code)) {
				return;
			}

			// - If message is a question, add it to the conversation and anwser it
			const question = Questions.find((question) => question.code === code);
			if (question) {
				handleAnswer(question);
			}
		}

		setMessages((prevMessages) => [
			...prevMessages,
			{
				id: prevMessages.length + 1,
				code,
				content,
				sender,
			},
		]);
	};

	const handleAnswer = async (question: Question) => {
		setAnwsering(true);

		for (const answer of question.answers) {
			await delay(500);

			setMessages((prevMessages) => [
				...prevMessages,
				{
					id: prevMessages.length + 1,
					...answer,
				},
			]);
		}

		setAnwsering(false);
	};

	return (
		<ConversationContext.Provider
			value={{
				messages,
				remainingQuestions: Questions.filter(
					(question) =>
						!messages.find((message) => message.code === question.code),
				),
				answering,
				addMessage,
			}}
		>
			{children}
		</ConversationContext.Provider>
	);
};
