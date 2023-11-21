import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const prebuilt: SidebarLink = (() => {
	const parentSlug = "/pre-built-contracts";
	return {
		name: "Pre-built Contracts",
		href: parentSlug,
		links: [
			{
				name: "Account Factory (ERC-4337)",
				href: `${parentSlug}/account-factory`,
			},
			{
				name: "Dynamic Account Factory (ERC-4337)",
				href: `${parentSlug}/dynamic-account-factory`,
			},
			{
				name: "Managed Account Factory (ERC-4337)",
				href: `${parentSlug}/managed-account-factory`,
			},
			{
				name: "Token (ERC-20)",
				href: `${parentSlug}/token`,
			},
			{
				name: "Token Drop (ERC-20)",
				href: `${parentSlug}/token-drop`,
			},
			{
				name: "NFT Collection (ERC-721)",
				href: `${parentSlug}/nft-collection`,
			},
			{
				name: "NFT Drop (ERC-721)",
				href: `${parentSlug}/nft-drop`,
			},
			{
				name: "Loyalty Card (ERC-721)",
				href: `${parentSlug}/loyalty-card`,
			},
			{
				name: "Open Edition (ERC-721)",
				href: `${parentSlug}/open-edition`,
			},
			{
				name: "Signature Drop (ERC-721)",
				href: `${parentSlug}/signature-drop`,
			},
			{
				name: "Edition (ERC-1155)",
				href: `${parentSlug}/edition`,
			},
			{
				name: "Edition Drop (ERC-1155)",
				href: `${parentSlug}/edition-drop`,
			},
			{
				name: "Airdrop",
				href: `${parentSlug}/airdrop`,
			},
			{
				name: "Airdrop Claimable",
				href: `${parentSlug}/airdrop-claimable`,
			},
			{
				name: "Stake",
				href: `${parentSlug}/stake`,
			},
			{
				name: "Marketplace",
				href: `${parentSlug}/marketplace`,
			},
			{
				name: "Multiwrap",
				href: `${parentSlug}/multiwrap`,
			},
			{
				name: "Pack",
				href: `${parentSlug}/pack`,
			},
			{
				name: "Split",
				href: `${parentSlug}/split`,
			},
			{
				name: "Vote",
				href: `${parentSlug}/vote`,
			},
		],
	};
})();

export const sidebar: SideBar = {
	name: "Contracts",
	links: [
		{
			name: "Overview",
			href: "/contracts",
		},
		prebuilt,
	],
};
