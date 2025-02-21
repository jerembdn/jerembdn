"use client";

import type React from "react";
import { env } from "../../../../env.mjs";
import Routes from "@/constants/routes";
import ActivityCard from "@/components/activity/card";
import Link from "@/components/ui/link";
import kitchn, { Avatar, Container, Image } from "kitchn";
import { useLanyard } from "use-lanyard";

type NavigationLink = {
	label: string;
	href: string;
};

const navLinks: NavigationLink[] = [
	{
		label: "~/",
		href: Routes.home,
	},
];

const Header: React.FC = () => {
	const { data } = useLanyard(env.NEXT_PUBLIC_DISCORD_USER_ID as `${bigint}`);

	return (
		<Container as={"header"} maxWidth={800} mx={"auto"}>
			<Container row justify={"space-between"} align={"center"}>
				<Container>
					<Avatar src={"/static/images/avatars/jeremy.jpg"} size={50} />
					{/* {activity && (
            <Container>
              <ActivityCard activity={activity} />
            </Container>
          )} */}
				</Container>

				<Container>
					<Container>
						{navLinks.map((link) => (
							<Container key={link.label}>
								<Link href={link.href}>{link.label}</Link>
							</Container>
						))}
					</Container>
				</Container>
			</Container>
		</Container>
	);
};

export type { NavigationLink };
export default Header;
