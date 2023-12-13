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
			isCollapsible: true,
			links: [
				{
					name: "Overview",
					href: `${embeddedSlug}/overview`,
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
					href: `${smartWalletSlug}/overview`,
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
