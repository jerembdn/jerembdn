"use client";

import type React from "react";
import {
	Button,
	Container,
	Input,
	Scroller,
	Text,
	useBreakpoint,
} from "kitchn";

import { useConversation } from "../../../../hooks/conversation";
import type { Message as TMessage } from "../../../../types/message";
import MessageGroup from "../group";
import Message from "..";
import type { Sender } from "../../../../types/sender";

const Conversation: React.FC = () => {
	const { isDesktop } = useBreakpoint();
	const conversation = useConversation();

	const groups: {
		sender: Sender;
		messages: TMessage[];
	}[] = conversation.messages.reduce((acc, message) => {
		const lastGroup = acc[acc.length - 1];

		if (lastGroup && lastGroup.sender === message.sender) {
			lastGroup.messages.push(message);
		} else {
			acc.push({
				sender: message.sender,
				messages: [message],
			});
		}

		return acc;
	}, []);

	return (
		<Container
			{...(!isDesktop && { px: 10 })}
			py={isDesktop ? 80 : 20}
			height={"calc(100vh - 50px)"}
			justify={"space-between"}
		>
			<Container flex={1} gap={20}>
				{groups.map((messageGroup, index: number) => (
					<MessageGroup sender={messageGroup.sender} key={index}>
						{messageGroup.messages.map((message) => (
							<Message key={message.id}>{message.content}</Message>
						))}
					</MessageGroup>
				))}
			</Container>

			<Container gap={20} marginTop={10}>
				<Container wrap="wrap" row gap={5}>
					{conversation.remainingQuestions.map(({ question, code }) => (
						<Button
							key={code}
							shape="round"
							type="light"
							variant="ghost"
							loading={conversation.answering}
							onClick={() => conversation.addMessage(question, code)}
						>
							{question}
						</Button>
					))}
				</Container>

				<Input
					label={
						conversation.answering
							? "Jeremy is answering..."
							: "Ask Jeremy a question"
					}
					disabled={conversation.answering}
				/>
			</Container>
		</Container>
	);
};

export default Conversation;
