import { SideBar } from "@/components/Layouts/DocLayout";
import {
	WalletsAuthIcon,
	WalletsConnectIcon,
	WalletsEmbeddedIcon,
	WalletsSmartIcon,
} from "@/icons";

const connectSlug = "/wallets/connect";
const embeddedSlug = "/wallets/embedded-wallet";
const smartWalletSlug = "/wallets/smart-wallet";
const authSlug = "/wallets/auth";

export const sidebar: SideBar = {
	name: "Wallets",
	links: [
		{
			name: "Overview",
			href: "/wallets",
		},
		{ separator: true },
		// Connect
		{
			name: "Connect",
			icon: <WalletsConnectIcon />,
			href: `${connectSlug}`,
			links: [
				{
					name: "ConnectWallet",
					href: "/wallets/connect/ConnectWallet",
				},
				{
					name: "Build Custom Experience",
					href: "/wallets/connect/custom",
				},
			],
		},

		//Embedded Wallets
		{ separator: true },
		{
			name: "Embedded Wallet",
			icon: <WalletsEmbeddedIcon />,
			href: `${embeddedSlug}/overview`,
			links: [
				{
					name: "How it works",
					href: `${embeddedSlug}/how-it-works`,
				},
				{
					name: "Get Started",
					href: `${embeddedSlug}/get-started`,
				},
				{
					name: "How to",
					links: [
						{
							name: "Connect Users",
							href: `${embeddedSlug}/how-to/connect-users`,
						},
						{
							name: "Build your own UI",
							href: `${embeddedSlug}/how-to/build-your-own-ui`,
						},
						{
							name: "Interact with wallets",
							href: `${embeddedSlug}/how-to/interact-with-wallets`,
						},
						{
							name: "Interact with the blockchain",
							href: `${embeddedSlug}/how-to/interact-blockchain`,
						},
						{
							name: "Enable Gasless Transactions",
							href: `${embeddedSlug}/how-to/enable-gasless`,
						},
						{
							name: "Export private key",
							href: `${embeddedSlug}/how-to/export-private-key`,
						},
					],
				},
				{
					name: "Custom Authentication",
					href: `${embeddedSlug}/custom-auth/overview`,
					links: [
						{
							name: "Configuration",
							href: `${embeddedSlug}/custom-auth/configuration`,
						},
						{
							name: "Integration guides",
							links: [
								{
									name: "Custom auth server (OIDC Auth)",
									href: `${embeddedSlug}/custom-auth/custom-jwt-auth-server`,
								},
								{
									name: "Custom auth server (Generic Auth)",
									href: `${embeddedSlug}/custom-auth/custom-auth-server`,
								},
								{
									name: "Firebase Auth",
									href: `${embeddedSlug}/custom-auth/firebase-auth`,
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
							href: `/react/v4/wallets/embedded-wallet`,
						},
						{
							name: "React Native",
							href: `/react-native/v4/wallets/embedded-wallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/embedded-wallet`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${embeddedSlug}/faqs`,
				},
			],
		},
		//Smart Wallets
		{ separator: true },
		{
			name: "Smart Wallet",
			icon: <WalletsSmartIcon />,
			isCollapsible: true,
			href: `${smartWalletSlug}`,
			links: [
				{
					name: "How it Works",
					href: `${smartWalletSlug}/how-it-works`,
				},
				{
					name: "Getting Started",
					href: `${smartWalletSlug}/getting-started`,
				},
				{
					name: "Bundler & Paymaster",
					href: `${smartWalletSlug}/infrastructure`,
				},
				{
					name: "Permissions & Session Keys",
					href: `${smartWalletSlug}/permissions`,
				},
				{
					name: "Guides",
					isCollapsible: true,
					expanded: true,
					links: [
						{
							name: "Usage in React",
							href: `${smartWalletSlug}/guides/react`,
						},
						{
							name: "Usage in Typescript",
							href: `${smartWalletSlug}/guides/typescript`,
						},
					],
				},
				{
					name: "References",
					isCollapsible: true,
					expanded: true,
					links: [
						{
							name: "React",
							href: `/react/v4/wallets/smartwallet`,
						},
						{
							name: "React Native",
							href: `/react-native/v4/wallets/smartwallet`,
						},
						{
							name: "TypeScript",
							href: `/references/wallets/v2/SmartWallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/smartwallet`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${smartWalletSlug}/faq`,
				},
			],
		},
		// Auth
		{ separator: true },
		{
			name: "Auth",
			icon: <WalletsAuthIcon />,
			isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${authSlug}`,
				},
				{
					name: "How it Works",
					isCollapsible: true,
					expanded: false,
					links: [
						{
							name: "Overview",
							href: `${authSlug}/how-it-works`,
						},
						{
							name: "Sign-in with Wallet",
							href: `${authSlug}/how-it-works/siwe`,
						},
						{
							name: "JSON Web Tokens",
							href: `${authSlug}/how-it-works/jwt`,
						},
						{
							name: "Auth API",
							href: `${authSlug}/how-it-works/api`,
						},
					],
				},
				{
					name: "Getting Started",
					href: `${authSlug}/getting-started`,
				},
				{
					name: "Client Frameworks",
					isCollapsible: true,
					expanded: false,
					links: [
						{
							name: "React",
							href: `${authSlug}/client-frameworks/react`,
						},
						{
							name: "React Native",
							href: `${authSlug}/client-frameworks/react-native`,
						},
					],
				},
				{
					name: "Server Frameworks",
					isCollapsible: true,
					expanded: false,
					links: [
						{
							name: "Next.js",
							href: `${authSlug}/server-frameworks/next`,
						},
						{
							name: "Express",
							href: `${authSlug}/server-frameworks/express`,
						},
					],
				},
				{
					name: "Integrations",
					isCollapsible: true,
					expanded: false,
					links: [
						{
							name: "Next Auth",
							href: `${authSlug}/integrations/next-auth`,
						},
						{
							name: "Supabase",
							href: `${authSlug}/integrations/supabase`,
						},
						{
							name: "Firebase",
							href: `${authSlug}/integrations/firebase`,
						},
					],
				},
				{
					name: "Wallet Configuration",
					href: `${authSlug}/wallet-configuration`,
				},
				{
					name: "FAQs",
					href: `${authSlug}/faq`,
				},
			],
		},
		// Wallet SDK
		{ separator: true },
		{
			name: "Wallet SDK",
			href: "/wallet-sdk/latest",
		},
	],
};
