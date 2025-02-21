import { env } from "../../env.mjs";

const Routes = {
	none: "#",
	home: "/",

	external: {
		// - Social
		discord_contact: `https://discord.com/users/${env.NEXT_PUBLIC_DISCORD_USER_ID}`,

		wakatime: "https://wakatime.com/@Jijon",

		// - Skills
		typescript: "https://www.typescriptlang.org/",
		nextjs: "https://nextjs.org/",
		nestjs: "https://nestjs.com/",
		reactjs: "https://reactjs.org/",
		mongodb: "https://www.mongodb.com/",
		fastify: "https://www.fastify.io/",
		java: "https://www.java.com/",
		docker: "https://www.docker.com/",
		rust: "https://www.rust-lang.org/",
		golang: "https://golang.org/",
		python: "https://www.python.org/",
		elixir: "https://elixir-lang.org/",
		graphql: "https://graphql.org/",
		php: "https://www.php.net/",
		laravel: "https://laravel.com/",
		symfony: "https://symfony.com/",

		// - Projects
		tonightpass: "https://tonightpass.com/",
		thegreensuits: "https://thegreensuits.fr/",
	},
};

export default Routes;
