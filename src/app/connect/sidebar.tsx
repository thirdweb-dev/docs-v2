import type { SideBar } from "@/components/Layouts/DocLayout";
import {
	WalletsAuthIcon,
	WalletsConnectIcon,
	WalletsInAppIcon,
	WalletsSmartIcon,
	PayIcon,
} from "@/icons";
import { CodeIcon } from "lucide-react";

const connectSlug = "/connect/connect";
const inAppSlug = "/connect/in-app-wallet";
const aAslug = "/connect/account-abstraction";
const authSlug = "/connect/auth";
const paySlug = "/connect/pay";

export const sidebar: SideBar = {
	name: "Connect",
	links: [
		{
			name: "Introduction",
			href: "/connect",
		},
		{
			name: "QuickStart",
			href: "/connect/quickstart",
		},
		{ separator: true },
		// Connect
		{
			name: "UI Components",
			icon: <WalletsConnectIcon />,
			href: `${connectSlug}`,
			links: [
				{
					name: "ConnectButton",
					href: `${connectSlug}/ConnectButton`,
				},
				{
					name: "ConnectEmbed",
					href: `${connectSlug}/ConnectEmbed`,
				},
				{
					name: "Build Custom Experience",
					href: `/typescript/v5/react/connecting-wallets#using-hooks`,
				},
			],
		},

		//In-App Wallets
		{ separator: true },
		{
			name: "In-App Wallet",
			icon: <WalletsInAppIcon />,
			href: `${inAppSlug}/overview`,
			links: [
				{
					name: "How it works",
					href: `${inAppSlug}/how-it-works`,
				},
				{
					name: "Get Started",
					href: `${inAppSlug}/get-started`,
				},
				{
					name: "How to",
					links: [
						{
							name: "Connect Users",
							href: `${inAppSlug}/how-to/connect-users`,
						},
						{
							name: "Build your own UI",
							href: `${inAppSlug}/how-to/build-your-own-ui`,
						},
						{
							name: "Interact with wallets",
							href: `${inAppSlug}/how-to/interact-with-wallets`,
						},
						{
							name: "Interact with the blockchain",
							href: `${inAppSlug}/how-to/interact-blockchain`,
						},
						{
							name: "Sponsor Transactions",
							href: `${inAppSlug}/how-to/enable-gasless`,
						},
						{
							name: "Getting User Details (Server)",
							href: `${inAppSlug}/how-to/get-in-app-wallet-details-on-server`,
						},
						{
							name: "Export private key",
							href: `${inAppSlug}/how-to/export-private-key`,
						},
					],
				},
				{
					name: "Custom Authentication",
					href: `${inAppSlug}/custom-auth/overview`,
					links: [
						{
							name: "Configuration",
							href: `${inAppSlug}/custom-auth/configuration`,
						},
						{
							name: "Integration guides",
							links: [
								{
									name: "Custom auth server (OIDC Auth)",
									href: `${inAppSlug}/custom-auth/custom-jwt-auth-server`,
								},
								{
									name: "Custom auth server (Generic Auth)",
									href: `${inAppSlug}/custom-auth/custom-auth-server`,
								},
								{
									name: "Firebase Auth",
									href: `${inAppSlug}/custom-auth/firebase-auth`,
								},
							],
						},
					],
				},
				{
					name: "References",
					links: [
						{
							name: "React",
							href: `/references/typescript/v5/inAppWallet`,
						},
						{
							name: "React Native",
							href: `/react-native/v0/wallets/in-app-wallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/providers/in-app-wallet`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${inAppSlug}/faqs`,
				},
			],
		},
		//Account abstraction
		{ separator: true },
		{
			name: "Account Abstraction",
			icon: <WalletsSmartIcon />,
			isCollapsible: true,
			href: `${aAslug}`,
			links: [
				{
					name: "How it Works",
					href: `${aAslug}/how-it-works`,
				},
				{
					name: "Get Started",
					href: `${aAslug}/get-started`,
				},
				{
					name: "Permissions & Session Keys",
					href: `${aAslug}/permissions`,
				},
				{
					name: "Batching Transactions",
					href: `${aAslug}/batching-transactions`,
				},
				{
					name: "Account Factories",
					href: `${aAslug}/factories`,
				},
				{
					name: "Bundler & Paymaster",
					href: `${aAslug}/infrastructure`,
				},
				{
					name: "Sponsorship rules",
					href: `${aAslug}/sponsorship-rules`,
				},
				{
					name: "Guides",
					isCollapsible: true,
					expanded: true,
					links: [
						{
							name: "Usage in React",
							href: `${aAslug}/guides/react`,
						},
						{
							name: "Usage in Typescript",
							href: `${aAslug}/guides/typescript`,
						},
					],
				},
				// {
				// 	name: "References",
				// 	isCollapsible: true,
				// 	expanded: true,
				// 	links: [
				// 		{
				// 			name: "React",
				// 			href: `/references/typescript/v5/smartWallet`,
				// 		},
				// 		{
				// 			name: "React Native",
				// 			href: `/react-native/v0/wallets/smartwallet`,
				// 		},
				// 		{
				// 			name: "TypeScript",
				// 			href: `/references/wallets/v2/SmartWallet`,
				// 		},
				// 		{
				// 			name: "Unity",
				// 			href: `/unity/wallets/providers/smart-wallet`,
				// 		},
				// 	],
				// },
				{
					name: "FAQs",
					href: `${aAslug}/faq`,
				},
			],
		},
		// Auth
		{ separator: true },
		{
			name: "Auth (SIWE)",
			icon: <WalletsAuthIcon />,
			isCollapsible: true,
			links: [
				{
					name: "Get Started",
					href: `${authSlug}`,
				},
				{
					name: "Frameworks",
					isCollapsible: true,
					expanded: false,
					links: [
						{
							name: "Next.js",
							href: `${authSlug}/frameworks/next`,
						},
					],
				},
				{
					name: "Deploying to Production",
					href: `${authSlug}/deploying-to-production`,
				},
			],
		},
		{ separator: true },
		// Pay
		{
			name: "Pay",
			icon: <PayIcon />,
			isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${paySlug}/overview`,
				},
				{
					name: "Get Started",
					href: `${paySlug}/get-started`,
				},
				{
					name: "Supported Chains",
					href: `${paySlug}/supported-chains`,
				},

				{
					name: "Buy With Fiat",
					isCollapsible: true,
					links: [
						{
							name: "Overview",
							href: `${paySlug}/buy-with-fiat`,
						},
						{
							name: "Build a Custom Experience",
							href: `${paySlug}/buy-with-fiat/build-a-custom-experience`,
						},
					],
				},
				{
					name: "Buy With Crypto",
					isCollapsible: true,
					links: [
						{
							name: "Overview",
							href: `${paySlug}/buy-with-crypto/overview`,
						},
						{
							name: "Fee Sharing",
							href: `${paySlug}/buy-with-crypto/fee-sharing`,
						},
					],
				},
				{
					name: "Customization",
					href: `${paySlug}/customization`,
					isCollapsible: true,
					expanded: true,
					links: [
						{
							name: "Support Custom Tokens",
							href: `${paySlug}/customization#supported-tokens`,
						},
						{
							name: "Prefill Custom Token",
							href: `${paySlug}/customization#prefill-custom-token`,
						},
						{
							name: "Disable Buy With Crypto",
							href: `${paySlug}/customization#disable-buy-with-crypto`,
						},
						{
							name: "Theme",
							href: `${paySlug}/customization#theme`,
						},
						{
							name: "Localization",
							href: `${paySlug}/customization#localization`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${paySlug}/faqs`,
				},
			],
		},
		{ separator: true },
		{
			name: "Blockchain API",
			href: "/connect/blockchain-api",
			icon: <CodeIcon />,
			isCollapsible: true,
			links: [
				{
					name: "TypeScript",
					href: `/typescript/v5`,
				},
				{
					name: "React",
					href: `/typescript/v5/react`,
				},
				{
					name: "React Native",
					href: `/react-native/v0`,
				},
				{
					name: "Unity",
					href: `/unity`,
				},
			],
		},
	],
};
