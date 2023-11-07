import createMDX from "@next/mdx";
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "tsx", "ts"],
};

export default withMDX(nextConfig);
