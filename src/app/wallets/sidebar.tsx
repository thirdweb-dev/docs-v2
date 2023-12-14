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
			isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${connectSlug}`,
				},
				{
					name: "Use Connect Component",
					isCollapsible: false,
					links: [
						{
							name: "Get Started",
							href: `${connectSlug}/connect-get-started`,
						},
						{
							name: "Customization",
							links: [
								{
									name: "Wallet Providers",
									href: `${connectSlug}/customization/wallet-providers`,
								},
								{
									name: "Theme",
									href: `${connectSlug}/customization/theme`,
								},
								{
									name: "Button",
									href: `${connectSlug}/customization/button`,
								},
								{
									name: "Modal",
									href: `${connectSlug}/customization/modal`,
								},
								{
									name: "Drop-Down",
									href: `${connectSlug}/customization/drop-down`,
								},
								{
									name: "Switch Networks",
									href: `${connectSlug}/customization/switch-networks`,
								},
								{
									name: "Custom CSS",
									href: `${connectSlug}/customization/custom-css`,
								},
							],
						},
						{
							name: "Sign-in Options",
							links: [
								{
									name: "Embedded Wallet",
									href: `${connectSlug}/advanced-sign-in-options/embedded-wallet`,
								},
								{
									name: "Smart Wallet",
									href: `${connectSlug}/advanced-sign-in-options/smart-wallet`,
								},
								{
									name: "Auth (SIWE)",
									href: `${connectSlug}/advanced-sign-in-options/auth`,
								},
							],
						},
					],
				},
				{
					name: "Build Custom Experience",
					isCollapsible: false,
					links: [
						{
							name: "Get Started",
							href: `${connectSlug}/custom-get-started`,
						},
						{
							name: "Wallet Providers",
							links: [
								{
									name: "MetaMask",
									icon: <WalletsConnectIcon />,
									href: `${connectSlug}/wallet-providers/metamask`,
								},
								{
									name: "Coinbase",
									href: `${connectSlug}/wallet-providers/coinbase`,
								},
								{
									name: "WalletConnect",
									href: `${connectSlug}/wallet-providers/walletconnect`,
								},
								{
									name: "Trust",
									href: `${connectSlug}/wallet-providers/trust`,
								},
								{
									name: "Rainbow",
									href: `${connectSlug}/wallet-providers/rainbow`,
								},
								{
									name: "Zerion",
									href: `${connectSlug}/wallet-providers/zerion`,
								},
								{
									name: "Phantom",
									href: `${connectSlug}/wallet-providers/phantom`,
								},
								{
									name: "Safe",
									href: `${connectSlug}/wallet-providers/safe`,
								},
								{
									name: "Blocto",
									href: `${connectSlug}/wallet-providers/blocto`,
								},
								{
									name: "Frame",
									href: `${connectSlug}/wallet-providers/frame`,
								},
							],
						},
						{
							name: "Wallet Hooks",
							links: [
								{
									name: "Wallet Providers",
									href: `${connectSlug}/customization/wallet-providers`,
								},
								{
									name: "Theme",
									href: `${connectSlug}/customization/theme`,
								},
								{
									name: "Button",
									href: `${connectSlug}/customization/button`,
								},
								{
									name: "Modal",
									href: `${connectSlug}/customization/modal`,
								},
								{
									name: "Drop-Down",
									href: `${connectSlug}/customization/drop-down`,
								},
								{
									name: "Switch Networks",
									href: `${connectSlug}/customization/switch-networks`,
								},
								{
									name: "Custom CSS",
									href: `${connectSlug}/advanced-customization/custom-css`,
								},
							],
						},
					],
				},
			],
		},

		//Embedded Wallets
		{ separator: true },
		{
			name: "Embedded Wallet",
			icon: <WalletsEmbeddedIcon />,
			href: `${embeddedSlug}/overview`,
			isCollapsible: false,
			isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${embeddedSlug}/overview`,
				},
				{
					name: "How it works",
					href: `${embeddedSlug}/how-it-works`,
				},
				{
					name: "QuickStart",
					href: `${embeddedSlug}/quick-start`,
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
					name: "Add Custom Authentication",
					links: [
						{
							name: "User your own auth",
							href: `${embeddedSlug}/custom-auth/use-own-auth`,
						},
						{
							name: "Custom Auth Server",
							href: `${embeddedSlug}/custom-auth/custom-auth-server`,
						},
						{
							name: "Custom JWT Auth Server",
							href: `${embeddedSlug}/custom-auth/custom-jwt-auth-server`,
						},
						{
							name: "Integrate Firebase Auth",
							href: `${embeddedSlug}/custom-auth/firebase-auth`,
						},
					],
				},
				{
					name: "FAQs",
					href: `${embeddedSlug}/faqs`,
				},
				{
					name: "References",
					links: [
						{
							name: "React",
							href: `/react/wallets/embedded-wallet`,
						},
						{
							name: "React Native",
							href: `/react-native/wallets/embedded-wallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/embedded-wallet`,
						},
					],
				},
			],
		},
		//Smart Wallets
		{ separator: true },
		{
			name: "Smart Wallet",
			icon: <WalletsSmartIcon />,
			isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${smartWalletSlug}`,
				},
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
					name: "FAQs",
					href: `${smartWalletSlug}/faq`,
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
							href: `/react/wallets/smartwallet`,
						},
						{
							name: "React Native",
							href: `/react-native/wallets/smartwallet`,
						},
						{
							name: "TypeScript",
							href: `/references/wallets/SmartWallet`,
						},
						{
							name: "Unity",
							href: `/unity/wallets/smartwallet`,
						},
					],
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
					href: `${authSlug}/overview`,
				},
			],
		},
	],
};
