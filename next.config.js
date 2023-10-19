const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "tsx"],
};

module.exports = withMDX(nextConfig);
