import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { redirects } from "./redirects.mjs";

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "tsx", "ts"],
	redirects,
};

export default withMDX(nextConfig);
