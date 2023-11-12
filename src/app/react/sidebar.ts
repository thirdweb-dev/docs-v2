import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const wallets: SidebarLink = {
	name: "Wallets",
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
		{
			name: "WalletConnect",
			href: "/react/wallets/walletconnect",
		},
		{
			name: "Smart Wallet",
			href: "/react/wallets/smartwallet",
		},
		{
			name: "Embedded Wallet",
			href: "/react/wallets/embedded-wallet",
		},
		{
			name: "Local Wallet",
			href: "/react/wallets/local-wallet",
		},
		{
			name: "Trust Wallet",
			href: "/react/wallets/trust",
		},
		{
			name: "Zerion",
			href: "/react/wallets/zerion",
		},
		{
			name: "Magic Link",
			href: "/react/wallets/magiclink",
		},
		{
			name: "Safe",
			href: "/react/wallets/safe",
		},
		{
			name: "Blocto",
			href: "/react/wallets/blocto",
		},
		{
			name: "Frame",
			href: "/react/wallets/frame",
		},
		{
			name: "Phantom",
			href: "/react/wallets/phantom",
		},
		{
			name: "Rainbow",
			href: "/react/wallets/rainbow",
		},
		{
			name: "OKX Wallet",
			href: "/react/wallets/okx",
		},
		{
			name: "Paper Wallet",
			href: "/react/wallets/paper",
		},
	],
};

const components: SidebarLink = {
	name: "Components",
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
};

const claimConditionHooks: SidebarLink = {
	name: "Claim Conditions",
	href: "/react/hooks/claim-conditions",
	links: [
		{
			name: "useActiveClaimCondition",
			href: "/react/hooks/claim-conditions/useActiveClaimCondition",
		},
	],
};

const hooks: SidebarLink = {
	name: "Hooks",
	href: "/react/hooks",
	links: [
		{
			name: "useAddress",
			href: "/react/hooks/useAddress",
		},
		{
			name: "useContract",
			href: "/react/hooks/useContract",
		},
		claimConditionHooks,
	],
};

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
		wallets,
		components,
		hooks,
		{
			name: "Migration Guide",
			href: "/react/migration-guide",
		},
		{
			name: "Full Reference",
			href: "/references/react",
		},
	],
};
