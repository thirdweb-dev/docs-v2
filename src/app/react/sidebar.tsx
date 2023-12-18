import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const components: SidebarLink = (() => {
	const parentSlug = "/react/components";
	return {
		name: "Components",
		links: [
			{
				name: "ConnectWallet",
				href: `${parentSlug}/ConnectWallet`,
			},
			{
				name: "Web3Button",
				href: `${parentSlug}/Web3Button`,
			},
			{
				name: "ThirdwebNftMedia",
				href: `${parentSlug}/ThirdwebNftMedia`,
			},
			{
				name: "MediaRenderer",
				href: `${parentSlug}/MediaRenderer`,
			},
		],
	};
})();

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
			href: "/react/ThirdwebProvider",
		},
		{
			name: "ThirdwebSDKProvider",
			href: "/react/ThirdwebSDKProvider",
		},
		{
			name: "Connecting Wallets",
			href: "/react/connecting-wallets",
		},
		{
			name: "Wallets",
			href: "/react/wallets",
		},
		components,
		{
			name: "Hooks",
			href: "/references/react#hooks",
		},
		{
			name: "Full Reference",
			href: "/references/react",
		},
	],
};
