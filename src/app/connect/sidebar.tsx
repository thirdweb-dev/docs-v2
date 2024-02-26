import { SideBar } from "@/components/Layouts/DocLayout";
import {
	WalletsAuthIcon,
	WalletsConnectIcon,
	WalletsEmbeddedIcon,
	WalletsSmartIcon,
} from "@/icons";

const connectSlug = "/connect/connect";
const embeddedSlug = "/connect/embedded-wallet";
const aAslug = "/connect/account-abstraction";
const authSlug = "/connect/auth";

export const sidebar: SideBar = {
	name: "Connect",
	links: [
		{
			name: "Overview",
			href: "/connect",
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
					href: `${connectSlug}/ConnectWallet`,
				},
				{
					name: "ConnectEmbed",
					href: `${connectSlug}/ConnectEmbed`,
				},
				{
					name: "Build Custom Experience",
					href: `${connectSlug}/custom`,
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
							href: `/references/react/v4/smartWallet`,
						},
						{
							name: "React Native",
							href: `/react-native/v0/wallets/smartwallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/providers/embedded-wallet`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${embeddedSlug}/faqs`,
				},
			],
		},
		//Account abstraction
		{ separator: true },
		{
			name: "Account abstraction",
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
				{
					name: "References",
					isCollapsible: true,
					expanded: true,
					links: [
						{
							name: "React",
							href: `/references/react/v4/smartWallet`,
						},
						{
							name: "React Native",
							href: `/react-native/v0/wallets/smartwallet`,
						},
						{
							name: "TypeScript",
							href: `/references/wallets/v2/SmartWallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/providers/smart-wallet`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${aAslug}/faq`,
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
					name: "Get Started",
					href: `${authSlug}/get-started`,
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
	],
};
