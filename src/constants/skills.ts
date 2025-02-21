import type { Skill } from "@/types/skill";
import Routes from "./routes";

const Skills: Skill[] = [
	{
		id: "typescript",
		type: "language",
		name: "TypeScript",
		description: "TypeScript extends JavaScript by adding types.",
		url: Routes.external.typescript,
		imageUrl: "/static/icons/skills/typescript.svg",
	},
	{
		id: "nextjs",
		type: "framework",
		name: "Next.JS",
		description: "Next.js is a React framework.",
		url: Routes.external.nextjs,
		imageUrl: "/static/icons/skills/nextjs.svg",
	},
	{
		id: "nestjs",
		type: "framework",
		name: "Nest.JS",
		description:
			"A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
		url: Routes.external.nestjs,
		imageUrl: "/static/icons/skills/nestjs.svg",
	},
	{
		id: "reactjs",
		type: "framework",
		name: "React.JS",
		description: "A JavaScript library for building user interfaces.",
		url: Routes.external.reactjs,
		imageUrl: "/static/icons/skills/reactjs.svg",
	},
	{
		id: "mongodb",
		type: "database",
		name: "MongoDB",
		description: "The most popular database for modern apps.",
		url: Routes.external.mongodb,
		imageUrl: "/static/icons/skills/mongodb.svg",
	},
	{
		id: "fastify",
		type: "framework",
		name: "Fastify",
		description:
			"Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture.",
		url: Routes.external.fastify,
		imageUrl: "/static/icons/skills/fastify.svg",
	},
	{
		id: "java",
		type: "language",
		name: "Java",
		description:
			"A high-level, class-based, object-oriented programming language.",
		url: Routes.external.java,
		imageUrl: "/static/icons/skills/java.svg",
	},
	{
		id: "docker",
		type: "devops",
		name: "Docker",
		description:
			"Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
		url: Routes.external.docker,
		imageUrl: "/static/icons/skills/docker.svg",
	},
	{
		id: "rust",
		type: "language",
		name: "Rust",
		description:
			"A language empowering everyone to build reliable and efficient software.",
		url: Routes.external.rust,
		imageUrl: "/static/icons/skills/rust.svg",
	},
	{
		id: "golang",
		type: "language",
		name: "Go",
		description:
			"Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
		url: Routes.external.golang,
		imageUrl: "/static/icons/skills/golang.svg",
	},
	{
		id: "python",
		type: "language",
		name: "Python",
		description:
			"Python is an interpreted, high-level and general-purpose programming language.",
		url: Routes.external.python,
		imageUrl: "/static/icons/skills/python.svg",
	},
	{
		id: "elixir",
		type: "language",
		name: "Elixir",
		description:
			"Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
		url: Routes.external.elixir,
		imageUrl: "/static/icons/skills/elixir.svg",
	},
	{
		id: "graphql",
		type: "other",
		name: "GraphQL",
		description:
			"GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
		url: Routes.external.graphql,
		imageUrl: "/static/icons/skills/graphql.svg",
	},
	{
		id: "php",
		type: "language",
		name: "PHP",
		description:
			"PHP is a popular general-purpose scripting language that is especially suited to web development.",
		url: Routes.external.php,
		imageUrl: "/static/icons/skills/php.svg",
	},
	{
		id: "laravel",
		type: "framework",
		name: "Laravel",
		description:
			"Laravel is a web application framework with expressive, elegant syntax.",
		url: Routes.external.laravel,
		imageUrl: "/static/icons/skills/laravel.svg",
	},
	{
		id: "symfony",
		type: "framework",
		name: "Symfony",
		description:
			"Symfony is a set of reusable PHP components and a PHP framework for web projects.",
		url: Routes.external.symfony,
		imageUrl: "/static/icons/skills/symfony.svg",
	},
];

export default Skills;
