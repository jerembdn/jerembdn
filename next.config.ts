import type { NextConfig } from "next";
import { withKitchnConfig } from "kitchn/next";

import "./env.mjs";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	reactStrictMode: process.env.NODE_ENV === "development",
	env: {
		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	experimental: {
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},
};

export default withKitchnConfig(nextConfig);
