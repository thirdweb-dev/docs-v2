import { SideBar } from "@/components/Layouts/DocLayout";
import { SidebarLink } from "@/components/others/Sidebar";

const prebuilt: SidebarLink = (() => {
	const parentSlug = "/contracts/pre-built-contracts";
	return {
		name: "Pre-built Contracts",
		links: [
			{
				name: "ERC-20",
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
				],
			},
			{
				name: "ERC-1155",
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
				name: "ERC-4337",
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
				name: "MISC.",
				links: [
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
			},
		],
	};
})();

const baseContracts: SidebarLink = (() => {
	const parentSlug = "/contracts/solidity-sdk/base-contracts";
	return {
		name: "Base Contracts",
		links: [
			{
				name: "ERC-20",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/ERC-20/base`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/ERC-20/drop`,
					},
					{
						name: "Drop Vote",
						href: `${parentSlug}/ERC-20/drop-vote`,
					},
					{
						name: "Vote",
						href: `${parentSlug}/ERC-20/vote`,
					},
				],
			},
			{
				name: "ERC-721",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/ERC-721/base`,
					},
					{
						name: "Delayed Reveal",
						href: `${parentSlug}/ERC-721/delayed-reveal`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/ERC-721/drop`,
					},
					{
						name: "Lazy Mint",
						href: `${parentSlug}/ERC-721/lazy-mint`,
					},
				],
			},
			{
				name: "ERC-1155",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/ERC-1155/base`,
					},
					{
						name: "Delayed Reveal",
						href: `${parentSlug}/ERC-1155/delayed-reveal`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/ERC-1155/drop`,
					},
					{
						name: "Lazy Mint",
						href: `${parentSlug}/ERC-1155/lazy-mint`,
					},
				],
			},
			{
				name: "ERC-4337",
				links: [
					{
						name: "Account",
						href: `${parentSlug}/ERC-4337/account`,
					},
					{
						name: "Account Factory",
						href: `${parentSlug}/ERC-4337/account-factory`,
					},
					{
						name: "Dynamic Account",
						href: `${parentSlug}/ERC-4337/dynamic-account`,
					},
					{
						name: "Dynamic Account Factory",
						href: `${parentSlug}/ERC-4337/dynamic-account-factory`,
					},
					{
						name: "Managed Account",
						href: `${parentSlug}/ERC-4337/managed-account`,
					},
					{
						name: "Managed Account Factory",
						href: `${parentSlug}/ERC-4337/managed-account-factory`,
					},
				],
			},
			{
				name: "Staking",
				links: [
					{
						name: "Staking ERC-20",
						href: `${parentSlug}/staking/erc-20`,
					},
					{
						name: "Staking ERC-721",
						href: `${parentSlug}/staking/erc-721`,
					},
					{
						name: "Staking ERC-1155",
						href: `${parentSlug}/staking/erc-1155`,
					},
				],
			},
		],
	};
})();

const extensions: SidebarLink = (() => {
	const parentSlug = "/contracts/solidity-sdk/extensions";
	return {
		name: "Extensions",
		links: [
			{
				name: "General",
				links: [
					{
						name: "BatchMintMetadata",
						href: `${parentSlug}/batchMintMetadata`,
					},
					{
						name: "ContractMetadata",
						href: `${parentSlug}/contractMetadata`,
					},
					{
						name: "DelayedReveal",
						href: `${parentSlug}/delayedReveal`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/drop`,
					},
					{
						name: "DropSinglePhase",
						href: `${parentSlug}/dropSinglePhase`,
					},
					{
						name: "LazyMint",
						href: `${parentSlug}/lazyMint`,
					},
					{
						name: "Multicall",
						href: `${parentSlug}/multicall`,
					},
					{
						name: "Ownable",
						href: `${parentSlug}/ownable`,
					},
					{
						name: "Permissions",
						href: `${parentSlug}/permissions`,
					},
					{
						name: "PermissionsEnumerable",
						href: `${parentSlug}/permissionsEnumerable`,
					},
					{
						name: "PlatformFee",
						href: `${parentSlug}/platformFee`,
					},
					{
						name: "PrimarySale",
						href: `${parentSlug}/primarySale`,
					},
					{
						name: "Royalty",
						href: `${parentSlug}/royalty`,
					},
				],
			},
			{
				name: "ERC-20",
				links: [
					{
						name: "ERC20",
						href: `${parentSlug}/ERC20`,
					},
					{
						name: "ERC20BatchMintable",
						href: `${parentSlug}/ERC20BatchMintable`,
					},
					{
						name: "ERC20Burnable",
						href: `${parentSlug}/ERC20Burnable`,
					},
					{
						name: "ERC20ClaimConditions",
						href: `${parentSlug}/ERC20ClaimConditions`,
					},
					{
						name: "ERC20ClaimPhases",
						href: `${parentSlug}/ERC20ClaimPhases`,
					},
					{
						name: "ERC20Mintable",
						href: `${parentSlug}/ERC20Mintable`,
					},
					{
						name: "ERC20Permit",
						href: `${parentSlug}/ERC20Permit`,
					},
					{
						name: "ERC20SignatureMinting",
						href: `${parentSlug}/ERC20SignatureMint`,
					},
					{
						name: "ERC20Staking",
						href: `${parentSlug}/ERC20Staking`,
					},
				],
			},
			{
				name: "ERC-721",
				links: [
					{
						name: "ERC721",
						href: `${parentSlug}/ERC721`,
					},
					{
						name: "ERC721BatchMintable",
						href: `${parentSlug}/ERC721BatchMintable`,
					},
					{
						name: "ERC721Burnable",
						href: `${parentSlug}/ERC721Burnable`,
					},
					{
						name: "ERC721",
						href: `${parentSlug}/ERC-721/lazy-mint`,
					},
				],
			},
			{
				name: "ERC-1155",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/ERC-1155/base`,
					},
					{
						name: "Delayed Reveal",
						href: `${parentSlug}/ERC-1155/delayed-reveal`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/ERC-1155/drop`,
					},
					{
						name: "Lazy Mint",
						href: `${parentSlug}/ERC-1155/lazy-mint`,
					},
				],
			},
			{
				name: "ERC-4337",
				links: [
					{
						name: "Account",
						href: `${parentSlug}/ERC-4337/account`,
					},
					{
						name: "Account Factory",
						href: `${parentSlug}/ERC-4337/account-factory`,
					},
					{
						name: "Dynamic Account",
						href: `${parentSlug}/ERC-4337/dynamic-account`,
					},
					{
						name: "Dynamic Account Factory",
						href: `${parentSlug}/ERC-4337/dynamic-account-factory`,
					},
					{
						name: "Managed Account",
						href: `${parentSlug}/ERC-4337/managed-account`,
					},
					{
						name: "Managed Account Factory",
						href: `${parentSlug}/ERC-4337/managed-account-factory`,
					},
				],
			},
			{
				name: "Staking",
				links: [
					{
						name: "Staking ERC-20",
						href: `${parentSlug}/staking/erc-20`,
					},
					{
						name: "Staking ERC-721",
						href: `${parentSlug}/staking/erc-721`,
					},
					{
						name: "Staking ERC-1155",
						href: `${parentSlug}/staking/erc-1155`,
					},
					{
						name: "Dynamic Account Factory",
						href: `${parentSlug}/ERC-4337/dynamic-account-factory`,
					},
					{
						name: "Managed Account",
						href: `${parentSlug}/ERC-4337/managed-account`,
					},
					{
						name: "Managed Account Factory",
						href: `${parentSlug}/ERC-4337/managed-account-factory`,
					},
				],
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
		baseContracts,
		extensions,
		{
			name: "FAQs",
			href: "/contracts/faq",
		},
	],
};
