import { SideBar } from "@/components/Layouts/DocLayout";

const sdkSlug = "/react/v4";
const referenceSlug = "/references/react/v4";
const componentsSlug = "/react/v4/components";

export const sidebar: SideBar = {
	name: "React SDK",
	links: [
		{
			name: "Overview",
			href: sdkSlug,
		},
		{
			name: "Getting Started",
			href: `${sdkSlug}/getting-started`,
		},
		{
			name: "ThirdwebProvider",
			href: `${sdkSlug}/ThirdwebProvider`,
		},
		{
			name: "ThirdwebSDKProvider",
			href: `${sdkSlug}/ThirdwebSDKProvider`,
		},
		{
			name: "Connecting Wallets",
			href: `${sdkSlug}/connecting-wallets`,
			links: [
				{
					name: "Custom UI",
					href: `${sdkSlug}/connecting-wallets/custom-ui`,
				},
			],
		},
		{
			name: "Wallets",
			href: `${sdkSlug}/wallets`,
		},
		{
			name: "Components",
			links: [
				{
					name: "ConnectWallet",
					href: `${componentsSlug}/ConnectWallet`,
				},
				{
					name: "ConnectEmbed",
					href: `${componentsSlug}/ConnectEmbed`,
				},
				{
					name: "Web3Button",
					href: `${componentsSlug}/Web3Button`,
				},
				{
					name: "ThirdwebNftMedia",
					href: `${componentsSlug}/ThirdwebNftMedia`,
				},
				{
					name: "MediaRenderer",
					href: `${componentsSlug}/MediaRenderer`,
				},
			],
		},
		{
			name: "Hooks",
			href: `${referenceSlug}/hooks`,
		},
		{
			name: "Full Reference",
			href: referenceSlug,
		},
	],
};
