import { SideBar } from "@/components/Layouts/DocLayout";

export const sidebar: SideBar = {
	name: "React SDK",
	links: [
		{
			name: "Overview",
			href: "/react",
		},
		{
			name: "Getting Started",
			href: "/react/getting-started",
		},
		{
			name: "ThirdwebProvider",
			href: "/react/thirdweb-provider",
		},
		{
			name: "ThirdwebSDKProvider",
			href: "/react/thirdweb-sdk-provider",
		},
		{
			name: "Connecting Wallets",
			href: "/react/connecting-wallets",
		},
		// wallets
		{
			group: "Wallets",
			href: "/react/wallets",
			links: [
				{
					name: "MetaMask",
					href: "/react/wallets/metamask",
				},
				{
					name: "Coinbase",
					href: "/react/wallets/coinbase",
				},
			],
		},
		// components
		{
			group: "Components",
			links: [
				{
					name: "ConnectWallet",
					href: "/react/components/connect",
				},
				{
					name: "Web3Button",
					href: "/react/components/web3button",
				},
				{
					name: "ThirdwebNftMedia",
					href: "/react/components/thirdweb-nft-media",
				},
				{
					name: "MediaRenderer",
					href: "/react/components/media-renderer",
				},
			],
		},
	],
};
