import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const wallets: SidebarLink = {
	name: "Wallets",
	href: "/react-native/wallets",
	links: [
		{
			name: "Coinbase Wallet",
			href: "/react-native/wallets/coinbase",
		},
		{
			name: "Embedded Wallet",
			href: "/react-native/wallets/embedded-wallet",
		},
		{
			name: "Local Wallet",
			href: "/react-native/wallets/local-wallet",
		},
		{
			name: "Magic Link (deprecated)",
			href: "/react-native/wallets/magiclink",
		},
		{
			name: "MetaMask Wallet",
			href: "/react-native/wallets/metamask",
		},
		{
			name: "Rainbow Wallet",
			href: "/react-native/wallets/rainbow",
		},
		{
			name: "Smart Wallet",
			href: "/react-native/wallets/smartwallet",
		},
		{
			name: "Trust Wallet",
			href: "/react-native/wallets/trust",
		},
		{
			name: "WalletConnect",
			href: "/react-native/wallets/walletconnect",
		},
	],
};

const components: SidebarLink = (() => {
	const parentSlug = "/react-native/components";
	return {
		name: "UI Components",
		links: [
			{
				name: "ConnectWallet",
				href: `${parentSlug}/ConnectWallet`,
			},
			{
				name: "Web3Button",
				href: `${parentSlug}/Web3Button`,
			},
		],
	};
})();

export const sidebar: SideBar = {
	name: "React Native SDK",
	links: [
		{
			name: "Overview",
			href: "/react-native",
		},
		{
			name: "Installation",
			href: "/react-native/installation",
		},
		{
			name: "Getting Started",
			href: "/react-native/getting-started",
		},
		{
			name: "ThirdwebSDKProvider",
			href: "/react-native/ThirdwebSDKProvider",
		},
		{
			name: "Connecting Wallets",
			href: "/react-native/connecting-wallets",
		},
		wallets,
		components,
		{
			name: "Hooks",
			href: "/references/react-native#hooks",
		},
		{
			name: "FAQ",
			href: "/react-native/faq",
		},
		{
			name: "Full Reference",
			href: "/references/react-native",
		},
	],
};
