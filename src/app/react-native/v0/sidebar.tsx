import { SideBar } from "@/components/Layouts/DocLayout";

const sdkSlug = "/react-native/v0";
const walletsSlug = "/react-native/v0/wallets";
const componentsSlug = "/react-native/v0/components";
const referencesSlug = "/references/react-native/v0";

export const sidebar: SideBar = {
	name: "React Native SDK",
	links: [
		{
			name: "Overview",
			href: sdkSlug,
		},
		{
			name: "Installation",
			href: `${sdkSlug}/installation`,
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
			href: walletsSlug,
			links: [
				{
					name: "Coinbase Wallet",
					href: `${walletsSlug}/coinbase`,
				},
				{
					name: "Embedded Wallet",
					href: `${walletsSlug}/embedded-wallet`,
				},
				{
					name: "Local Wallet",
					href: `${walletsSlug}/local-wallet`,
				},
				{
					name: "Magic Link",
					href: `${walletsSlug}/magiclink`,
				},
				{
					name: "MetaMask Wallet",
					href: `${walletsSlug}/metamask`,
				},
				{
					name: "Rainbow Wallet",
					href: `${walletsSlug}/rainbow`,
				},
				{
					name: "Smart Account (Account Abstraction)",
					href: `${walletsSlug}/smartwallet`,
				},
				{
					name: "Trust Wallet",
					href: `${walletsSlug}/trust`,
				},
				{
					name: "WalletConnect",
					href: `${walletsSlug}/walletconnect`,
				},
			],
		},
		{
			name: "UI Components",
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
			],
		},
		{
			name: "Hooks",
			href: `${referencesSlug}/hooks`,
		},
		{
			name: "FAQ",
			href: `${sdkSlug}/faq`,
		},
		{
			name: "Full Reference",
			href: referencesSlug,
		},
	],
};
