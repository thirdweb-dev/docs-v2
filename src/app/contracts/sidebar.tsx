import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const prebuilt: SidebarLink = (() => {
	const parentSlug = "/contracts/pre-built-contracts";
	return {
		name: "Pre-built Contracts",
		links: [
			{
				name: "ERC-4337",
				isCollapsible: false,
				links: [
					{
						name: "Account Factory",
						href: `${parentSlug}/account-factory`,
					},
					{
						name: "Dynamic Account Factory",
						href: `${parentSlug}/dynamic-account-factory`,
					},
					{
						name: "Managed Account Factory",
						href: `${parentSlug}/managed-account-factory`,
					},
				],
			},
			{
				name: "ERC-20",
				isCollapsible: false,
				links: [
					{
						name: "Token",
						href: `${parentSlug}/token`,
					},
					{
						name: "Token Drop",
						href: `${parentSlug}/token-drop`,
					},
				],
			},
			{
				name: "ERC-721",
				isCollapsible: false,
				links: [
					{
						name: "NFT Collection",
						href: `${parentSlug}/nft-collection`,
					},
					{
						name: "NFT Drop",
						href: `${parentSlug}/nft-drop`,
					},
					{
						name: "Loyalty Card",
						href: `${parentSlug}/loyalty-card`,
					},
					{
						name: "Open Edition",
						href: `${parentSlug}/open-edition`,
					},
					{
						name: "Signature Drop",
						href: `${parentSlug}/signature-drop`,
					},
				],
			},
			{
				name: "ERC-1155",
				isCollapsible: false,
				links: [
					{
						name: "Edition",
						href: `${parentSlug}/edition`,
					},
					{
						name: "Edition Drop",
						href: `${parentSlug}/edition-drop`,
					},
				],
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
		{
			name: "FAQs",
			href: "/contracts/faq",
		},
	],
};
