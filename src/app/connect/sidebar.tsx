import type { SideBar } from "@/components/Layouts/DocLayout";
import {
	WalletsAuthIcon,
	WalletsConnectIcon,
	WalletsInAppIcon,
	WalletsSmartIcon,
	PayIcon,
} from "@/icons";
import { CodeIcon } from "lucide-react";

const connectSlug = "/connect/sign-in";
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
			name: "Quickstart",
			href: "/connect/quickstart",
		},
		{
			name: "Playground",
			href: "https://playground.thirdweb.com/",
		},
		{ separator: true },
		// Connect
		{
			name: "Sign-In",
			icon: <WalletsConnectIcon />,
			href: `${connectSlug}`,
			links: [
				{
					name: "Get Started",
					// expanded: true,
					links: [
						{
							name: "Connect Button",
							href: `${connectSlug}/ConnectButton`,
						},
						{
							name: "Connect Embed",
							href: `${connectSlug}/ConnectEmbed`,
						},
						{
							name: "Custom UI",
							href: `${connectSlug}/Custom-UI`,
						},
					],
				},
				{
					name: "Sign-In Methods",
					links: [
						{
							name: "Email & Phone",
							href: `${connectSlug}/methods/email-and-phone`,
						},
						{
							name: "Social Login",
							href: `${connectSlug}/methods/social-logins`,
						},
						{
							name: "External Wallets",
							href: `${connectSlug}/methods/external-wallets`,
						},
					],
				},
				{
					name: "Customization",
					links: [
						{
							name: "Logo",
							href: `${connectSlug}/customization#logo`,
						},
						{
							name: "Compact Modal",
							href: `${connectSlug}/customization#compact-modal`,
						},
						{
							name: "Theme",
							href: `${connectSlug}/customization#theming`,
						},
						{
							name: "Localization",
							href: `${connectSlug}/customization#localization`,
						},
					],
				},
				{
					name: "Migrate from RainbowKit",
					href: `${connectSlug}/rainbow-kit-migrate`,
				},
				{
					name: "Playground",
					href: "https://thirdweb.com/dashboard/connect/playground",
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
							href: "/references/typescript/v5/inAppWallet",
						},
						{
							name: "React Native",
							href: "/references/typescript/v5/inAppWallet",
						},
						{
							name: "Unity",
							href: "/unity/wallets/providers/in-app-wallet",
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
						{
							name: "React + Express",
							href: `${authSlug}/frameworks/react-express`,
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
			// isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${paySlug}/overview`,
				},
				{
					name: "Get Started",
					href: `${paySlug}/get-started`,
					expanded: true,
					links: [
						{
							name: "ConnectButton",
							href: `${paySlug}/get-started#option-1-connectbutton`,
						},
						{
							name: "Embed Pay",
							href: `${paySlug}/get-started#option-2-embed-pay`,
						},
						{
							name: "Send a Transaction",
							href: `${paySlug}/get-started#option-3-send-a-transaction-with-pay`,
						},
					],
				},
				{
					name: "Supported Chains",
					href: `${paySlug}/supported-chains`,
				},

				{
					name: "Buy With Fiat",
					href: `${paySlug}/buy-with-fiat`,
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
					isCollapsible: true,
					expanded: true,
					links: [
						{
							name: "ConnectButton",
							href: `${paySlug}/customization/connectbutton`,
						},
						{
							name: "PayEmbed",
							href: `${paySlug}/customization/payembed`,
						},
						{
							name: "useSendTransaction",
							href: `${paySlug}/customization/send-transaction`,
						},
					],
				},
				{
					name: "Build a Custom Experience",
					href: `${paySlug}/build-a-custom-experience`,
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
					href: "/typescript/v5",
				},
				{
					name: "React",
					href: "/typescript/v5/react",
				},
				{
					name: "React Native",
					href: "/typescript/v5/react-native",
				},
				{
					name: "Unity",
					href: "/unity",
				},
			],
		},
	],
};
