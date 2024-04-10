import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const walletProviders: SidebarLink = (() => {
	const parentSlug = "/dotnet/wallets/providers";
	return {
		name: "Wallet Providers",
		links: [
			{
				name: "In App Wallet",
				href: `${parentSlug}/in-app-wallet`,
			},
			{
				name: "Account Abstraction",
				href: `${parentSlug}/account-abstraction`,
			},
			{
				name: "Private Key Wallet",
				href: `${parentSlug}/private-key`,
			},
		],
	};
})();

const walletActions: SidebarLink = (() => {
	const parentSlug = "/dotnet/wallets/actions";
	return {
		name: "Wallet Actions",
		links: [
			{
				name: "GetAddress",
				href: `${parentSlug}/getaddress`,
			},
			{
				name: "IsConnected",
				href: `${parentSlug}/isconnected`,
			},
			{
				name: "Sign",
				href: `${parentSlug}/sign`,
			},
			{
				name: "SignTypedDataV4",
				href: `${parentSlug}/signtypeddatav4`,
			},
			{
				name: "Disconnect",
				href: `${parentSlug}/disconnect`,
			},
		],
	};
})();

const wallets: SidebarLink = (() => {
	// const parentSlug = "/dotnet/wallets";
	return {
		name: "Wallet Interactions",
		links: [walletProviders, walletActions],
	};
})();

const contracts: SidebarLink = {
	name: "Contract Interactions",
	links: [
		{
			name: "Create Contract",
			href: "/dotnet/contracts/create",
		},
		{
			name: "Read Contract",
			href: "/dotnet/contracts/read",
		},
		{
			name: "Write Contract",
			href: "/dotnet/contracts/write",
		},
	],
};

export const sidebar: SideBar = {
	name: ".NET SDK",
	links: [
		{
			name: "Overview",
			href: "/dotnet",
		},
		{
			name: "Getting Started",
			href: "/dotnet/getting-started",
		},
		{
			name: "GoDot Setup",
			href: "/dotnet/godot",
		},
		{
			name: "Thirdweb Client",
			href: "/dotnet/client",
		},
		contracts,
		wallets,
		{
			name: "Storage Download & Upload",
			href: "/dotnet/storage",
		},
	],
};
