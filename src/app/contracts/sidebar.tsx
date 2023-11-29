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
	const parentSlug = "/contracts/base-contracts";
	return {
		name: "Base Contracts",
		links: [
			{
				name: "ERC-20",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/erc-20/base`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/erc-20/drop`,
					},
					{
						name: "Drop Vote",
						href: `${parentSlug}/erc-20/drop-vote`,
					},
					{
						name: "Signature Mint",
						href: `${parentSlug}/erc-20/signature-mint`,
					},
					{
						name: "Signature Mint Vote",
						href: `${parentSlug}/erc-20/signature-mint-vote`,
					},
					{
						name: "Vote",
						href: `${parentSlug}/erc-20/vote`,
					},
				],
			},
			{
				name: "ERC-721",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/erc-721/base`,
					},
					{
						name: "Delayed Reveal",
						href: `${parentSlug}/erc-721/delayed-reveal`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/erc-721/drop`,
					},
					{
						name: "Lazy Mint",
						href: `${parentSlug}/erc-721/lazy-mint`,
					},
					{
						name: "Signature Mint",
						href: `${parentSlug}/erc-721/signature-mint`,
					},
				],
			},
			{
				name: "ERC-1155",
				links: [
					{
						name: "Base",
						href: `${parentSlug}/erc-1155/base`,
					},
					{
						name: "Delayed Reveal",
						href: `${parentSlug}/erc-1155/delayed-reveal`,
					},
					{
						name: "Drop",
						href: `${parentSlug}/erc-1155/drop`,
					},
					{
						name: "Lazy Mint",
						href: `${parentSlug}/erc-1155/lazy-mint`,
					},
					{
						name: "Signature Mint",
						href: `${parentSlug}/erc-1155/signature-mint`,
					},
				],
			},
			{
				name: "ERC-4337",
				links: [
					{
						name: "Account",
						href: `${parentSlug}/erc-4337/account`,
					},
					{
						name: "Account Factory",
						href: `${parentSlug}/erc-4337/account-factory`,
					},
					{
						name: "Dynamic Account",
						href: `${parentSlug}/erc-4337/dynamic-account`,
					},
					{
						name: "Dynamic Account Factory",
						href: `${parentSlug}/erc-4337/dynamic-account-factory`,
					},
					{
						name: "Managed Account",
						href: `${parentSlug}/erc-4337/managed-account`,
					},
					{
						name: "Managed Account Factory",
						href: `${parentSlug}/erc-4337/managed-account-factory`,
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
						name: "ERC721ClaimConditions",
						href: `${parentSlug}/ERC721ClaimConditions`,
					},
					{
						name: "ERC721ClaimCustom",
						href: `${parentSlug}/ERC721ClaimCustom`,
					},
					{
						name: "ERC721ClaimPhases",
						href: `${parentSlug}/ERC721ClaimCustom`,
					},
					{
						name: "ERC721Claimable",
						href: `${parentSlug}/ERC721Claimable`,
					},
					{
						name: "ERC721Enumerable",
						href: `${parentSlug}/ERC721Enumerable`,
					},
					{
						name: "ERC721Mintable",
						href: `${parentSlug}/ERC721Mintable`,
					},
					{
						name: "ERC721Revealable",
						href: `${parentSlug}/ERC721Revealable`,
					},
					{
						name: "ERC721SignatureMint",
						href: `${parentSlug}/ERC721SignatureMint`,
					},
					{
						name: "ERC721Staking",
						href: `${parentSlug}/ERC721Staking`,
					},
					{
						name: "ERC721Supply",
						href: `${parentSlug}/ERC721Supply`,
					},
				],
			},
			{
				name: "ERC-1155",
				links: [
					{
						name: "ERC1155",
						href: `${parentSlug}/ERC1155`,
					},
					{
						name: "ERC1155BatchMintable",
						href: `${parentSlug}/ERC1155BatchMintable`,
					},
					{
						name: "ERC1155Burnable",
						href: `${parentSlug}/ERC1155Burnable`,
					},
					{
						name: "ERC1155ClaimConditions",
						href: `${parentSlug}/ERC1155ClaimConditions`,
					},
					{
						name: "ERC1155ClaimCustom",
						href: `${parentSlug}/ERC1155ClaimCustom`,
					},
					{
						name: "ERC1155ClaimPhases",
						href: `${parentSlug}/ERC1155ClaimPhases`,
					},
					{
						name: "ERC1155Claimable",
						href: `${parentSlug}/ERC1155Claimable`,
					},
					{
						name: "ERC1155Drop",
						href: `${parentSlug}/ERC1155Drop`,
					},
					{
						name: "ERC1155DropSinglePhase",
						href: `${parentSlug}/ERC1155DropSinglePhase`,
					},
					{
						name: "ERC1155Enumerable",
						href: `${parentSlug}/ERC1155Enumerable`,
					},
					{
						name: "ERC1155Mintable",
						href: `${parentSlug}/ERC1155Mintable`,
					},
					{
						name: "ERC1155Revealable",
						href: `${parentSlug}/ERC1155Revealable`,
					},
					{
						name: "ERC1155SignatureMint",
						href: `${parentSlug}/ERC1155SignatureMint`,
					},
					{
						name: "ERC1155Staking",
						href: `${parentSlug}/ERC1155Staking`,
					},
					{
						name: "ERC1155Supply",
						href: `${parentSlug}/ERC1155Supply`,
					},
				],
			},
			{
				name: "ERC-4337",
				links: [
					{
						name: "AccountExtension",
						href: `${parentSlug}/AccountExtension`,
					},
					{
						name: "SmartWallet",
						href: `${parentSlug}/SmartWallet`,
					},
					{
						name: "SmartWalletFactory",
						href: `${parentSlug}/SmartWalletFactory`,
					},
				],
			},
		],
	};
})();

const designDocs: SidebarLink = (() => {
	const parentSlug = "/contracts/design-docs";
	return {
		name: "Design Docs",
		links: [
			{
				name: "Drop",
				href: `${parentSlug}/drop`,
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
				name: "Signature Mint",
				href: `${parentSlug}/signature-mint`,
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
			name: "Get Started",
			href: "/contracts/build/get-started",
		},
		baseContracts,
		extensions,
		designDocs,
		{
			name: "FAQs",
			href: "/contracts/faq",
		},
	],
};
