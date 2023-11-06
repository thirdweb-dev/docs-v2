import createMDX from "@next/mdx";

import * as url from "url";
const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "tsx", "ts"],
	experimental: {
		instrumentationHook: true,
	},
	serverRuntimeConfig: {
		__ROOT_DIR__: dirname,
	},
};

export default withMDX(nextConfig);
