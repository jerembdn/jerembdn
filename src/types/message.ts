import type React from "react";
import type { Sender } from "./sender";

export type Message = {
	id: number;
	code?: string;
	content: React.ReactNode;
	sender?: Sender;
};
