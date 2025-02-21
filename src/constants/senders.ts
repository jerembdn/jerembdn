import type { Sender } from "@/types/sender";

const Senders: {
	[key: string]: Sender;
} = {
	jeremy: {
		id: "jeremy",
		name: "Jeremy",
		avatarUrl: "/static/images/avatars/jeremy.jpg",
	},
};

export default Senders;
