import { SideBar } from "@/components/Layouts/DocLayout";
import {
	ContractBuildIcon,
	ContractExploreIcon,
	ContractInteractIcon,
	ContractDeployIcon,
	ContractPublishIcon,
} from "@/icons";

const prebuiltSlug = "/contracts/explore/pre-built-contracts";
const buildSlug = "/contracts/build";
const deploySlug = "/contracts/deploy";
const publishSlug = "/contracts/publish";
const interactSlug = "/contracts/interact";
const designDocs = "/contracts/design-docs";
const extensionsSlug = "/contracts/build/extensions";
const baseContractsSlug = "/contracts/build/base-contracts";

export const sidebar: SideBar = {
	name: "Contracts",
	links: [
		{
			name: "Overview",
			href: "/contracts",
		},
		{ separator: true },
		// explore
		{
			name: "Explore",
			icon: <ContractExploreIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `/contracts/explore/overview`,
				},
				{
					name: "Pre-built Contracts",
					links: [
						{
							name: "ERC-20",
							links: [
								{
									name: "Token",
									href: `${prebuiltSlug}/token`,
								},
								{
									name: "Token Drop",
									href: `${prebuiltSlug}/token-drop`,
								},
								{
									name: "Stake ERC-20",
									href: `${prebuiltSlug}/stake-erc20`,
								},
								{
									name: "Airdrop ERC-20",
									href: `${prebuiltSlug}/airdrop-erc20`,
								},
								{
									name: "Airdrop ERC-20 (Claimable)",
									href: `${prebuiltSlug}/airdrop-erc20-claimable`,
								},
							],
						},
						{
							name: "ERC-721",
							links: [
								{
									name: "NFT Collection",
									href: `${prebuiltSlug}/nft-collection`,
								},
								{
									name: "NFT Drop",
									href: `${prebuiltSlug}/nft-drop`,
								},
								{
									name: "Loyalty Card",
									href: `${prebuiltSlug}/loyalty-card`,
								},
								{
									name: "Open Edition",
									href: `${prebuiltSlug}/open-edition`,
								},
								{
									name: "Stake ERC-721",
									href: `${prebuiltSlug}/stake-erc721`,
								},
								{
									name: "Airdrop ERC-721",
									href: `${prebuiltSlug}/airdrop-erc721`,
								},
								{
									name: "Airdrop ERC-721 (Claimable)",
									href: `${prebuiltSlug}/airdrop-erc721-claimable`,
								},
							],
						},
						{
							name: "ERC-1155",
							links: [
								{
									name: "Edition",
									href: `${prebuiltSlug}/edition`,
								},
								{
									name: "Edition Drop",
									href: `${prebuiltSlug}/edition-drop`,
								},
								{
									name: "Stake ERC-1155",
									href: `${prebuiltSlug}/stake-erc1155`,
								},
								{
									name: "Airdrop ERC-1155",
									href: `${prebuiltSlug}/airdrop-erc1155`,
								},
								{
									name: "Airdrop ERC-1155 (Claimable)",
									href: `${prebuiltSlug}/airdrop-erc1155-claimable`,
								},
							],
						},
						{
							name: "ERC-4337",
							links: [
								{
									name: "Account Factory",
									href: `${prebuiltSlug}/account-factory`,
								},
								{
									name: "Dynamic Account Factory",
									href: `${prebuiltSlug}/dynamic-account-factory`,
								},
								{
									name: "Managed Account Factory",
									href: `${prebuiltSlug}/managed-account-factory`,
								},
							],
						},
						{
							name: "MISC.",
							links: [
								{
									name: "Stake",
									href: `${prebuiltSlug}/stake`,
								},
								{
									name: "Marketplace",
									href: `${prebuiltSlug}/marketplace`,
								},
								{
									name: "Multiwrap",
									href: `${prebuiltSlug}/multiwrap`,
								},
								{
									name: "Pack",
									href: `${prebuiltSlug}/pack`,
								},
								{
									name: "Split",
									href: `${prebuiltSlug}/split`,
								},
								{
									name: "Vote",
									href: `${prebuiltSlug}/vote`,
								},
							],
						},
					],
				},
			],
		},
		{ separator: true },
		// build

		{
			name: "Build",
			icon: <ContractBuildIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${buildSlug}/overview`,
				},
				{
					name: "Get Started",
					href: `${buildSlug}/get-started`,
				},
				// base contracts
				{
					name: "Base Contracts",
					links: [
						{
							name: "ERC-20",
							links: [
								{
									name: "Base",
									href: `${baseContractsSlug}/erc-20/base`,
								},
								{
									name: "Drop",
									href: `${baseContractsSlug}/erc-20/drop`,
								},
								{
									name: "Drop Vote",
									href: `${baseContractsSlug}/erc-20/drop-vote`,
								},
								{
									name: "Signature Mint",
									href: `${baseContractsSlug}/erc-20/signature-mint`,
								},
								{
									name: "Signature Mint Vote",
									href: `${baseContractsSlug}/erc-20/signature-mint-vote`,
								},
								{
									name: "Vote",
									href: `${baseContractsSlug}/erc-20/vote`,
								},
							],
						},
						{
							name: "ERC-721",
							links: [
								{
									name: "Base",
									href: `${baseContractsSlug}/erc-721/base`,
								},
								{
									name: "Delayed Reveal",
									href: `${baseContractsSlug}/erc-721/delayed-reveal`,
								},
								{
									name: "Drop",
									href: `${baseContractsSlug}/erc-721/drop`,
								},
								{
									name: "Lazy Mint",
									href: `${baseContractsSlug}/erc-721/lazy-mint`,
								},
								{
									name: "Signature Mint",
									href: `${baseContractsSlug}/erc-721/signature-mint`,
								},
							],
						},
						{
							name: "ERC-1155",
							links: [
								{
									name: "Base",
									href: `${baseContractsSlug}/erc-1155/base`,
								},
								{
									name: "Delayed Reveal",
									href: `${baseContractsSlug}/erc-1155/delayed-reveal`,
								},
								{
									name: "Drop",
									href: `${baseContractsSlug}/erc-1155/drop`,
								},
								{
									name: "Lazy Mint",
									href: `${baseContractsSlug}/erc-1155/lazy-mint`,
								},
								{
									name: "Signature Mint",
									href: `${baseContractsSlug}/erc-1155/signature-mint`,
								},
							],
						},
						{
							name: "ERC-4337",
							links: [
								{
									name: "Account",
									href: `${baseContractsSlug}/erc-4337/account`,
								},
								{
									name: "Account Factory",
									href: `${baseContractsSlug}/erc-4337/account-factory`,
								},
								{
									name: "Dynamic Account",
									href: `${baseContractsSlug}/erc-4337/dynamic-account`,
								},
								{
									name: "Dynamic Account Factory",
									href: `${baseContractsSlug}/erc-4337/dynamic-account-factory`,
								},
								{
									name: "Managed Account",
									href: `${baseContractsSlug}/erc-4337/managed-account`,
								},
								{
									name: "Managed Account Factory",
									href: `${baseContractsSlug}/erc-4337/managed-account-factory`,
								},
							],
						},
						{
							name: "Staking",
							links: [
								{
									name: "Staking ERC-20",
									href: `${baseContractsSlug}/staking/erc-20`,
								},
								{
									name: "Staking ERC-721",
									href: `${baseContractsSlug}/staking/erc-721`,
								},
								{
									name: "Staking ERC-1155",
									href: `${baseContractsSlug}/staking/erc-1155`,
								},
							],
						},
					],
				},
				// extensions
				{
					name: "Extensions",
					links: [
						{
							name: "General",
							links: [
								{
									name: "BatchMintMetadata",
									href: `${extensionsSlug}/general/BatchMintMetadata`,
								},
								{
									name: "ContractMetadata",
									href: `${extensionsSlug}/general/ContractMetadata`,
								},
								{
									name: "DelayedReveal",
									href: `${extensionsSlug}/general/DelayedReveal`,
								},
								{
									name: "Drop",
									href: `${extensionsSlug}/general/Drop`,
								},
								{
									name: "DropSinglePhase",
									href: `${extensionsSlug}/general/DropSinglePhase`,
								},
								{
									name: "LazyMint",
									href: `${extensionsSlug}/general/LazyMint`,
								},
								{
									name: "Multicall",
									href: `${extensionsSlug}/general/Multicall`,
								},
								{
									name: "Ownable",
									href: `${extensionsSlug}/general/Ownable`,
								},
								{
									name: "Permissions",
									href: `${extensionsSlug}/general/Permissions`,
								},
								{
									name: "PermissionsEnumerable",
									href: `${extensionsSlug}/general/PermissionsEnumerable`,
								},
								{
									name: "PlatformFee",
									href: `${extensionsSlug}/general/PlatformFee`,
								},
								{
									name: "PrimarySale",
									href: `${extensionsSlug}/general/PrimarySale`,
								},
								{
									name: "Royalty",
									href: `${extensionsSlug}/general/Royalty`,
								},
							],
						},
						{
							name: "ERC-20",
							links: [
								{
									name: "ERC20",
									href: `${extensionsSlug}/erc-20/ERC20`,
								},
								{
									name: "ERC20BatchMintable",
									href: `${extensionsSlug}/erc-20/ERC20BatchMintable`,
								},
								{
									name: "ERC20Burnable",
									href: `${extensionsSlug}/erc-20/ERC20Burnable`,
								},
								{
									name: "ERC20ClaimConditions",
									href: `${extensionsSlug}/erc-20/ERC20ClaimConditions`,
								},
								{
									name: "ERC20ClaimPhases",
									href: `${extensionsSlug}/erc-20/ERC20ClaimPhases`,
								},
								{
									name: "ERC20Mintable",
									href: `${extensionsSlug}/erc-20/ERC20Mintable`,
								},
								{
									name: "ERC20Permit",
									href: `${extensionsSlug}/erc-20/ERC20Permit`,
								},
								{
									name: "ERC20SignatureMint",
									href: `${extensionsSlug}/erc-20/ERC20SignatureMint`,
								},
								{
									name: "ERC20Staking",
									href: `${extensionsSlug}/erc-20/ERC20Staking`,
								},
							],
						},
						{
							name: "ERC-721",
							links: [
								{
									name: "ERC721",
									href: `${extensionsSlug}/ERC721`,
								},
								{
									name: "ERC721BatchMintable",
									href: `${extensionsSlug}/ERC721BatchMintable`,
								},
								{
									name: "ERC721Burnable",
									href: `${extensionsSlug}/ERC721Burnable`,
								},
								{
									name: "ERC721ClaimConditions",
									href: `${extensionsSlug}/ERC721ClaimConditions`,
								},
								{
									name: "ERC721ClaimCustom",
									href: `${extensionsSlug}/ERC721ClaimCustom`,
								},
								{
									name: "ERC721ClaimPhases",
									href: `${extensionsSlug}/ERC721ClaimCustom`,
								},
								{
									name: "ERC721Claimable",
									href: `${extensionsSlug}/ERC721Claimable`,
								},
								{
									name: "ERC721Enumerable",
									href: `${extensionsSlug}/ERC721Enumerable`,
								},
								{
									name: "ERC721Mintable",
									href: `${extensionsSlug}/ERC721Mintable`,
								},
								{
									name: "ERC721Revealable",
									href: `${extensionsSlug}/ERC721Revealable`,
								},
								{
									name: "ERC721SignatureMint",
									href: `${extensionsSlug}/ERC721SignatureMint`,
								},
								{
									name: "ERC721Staking",
									href: `${extensionsSlug}/ERC721Staking`,
								},
								{
									name: "ERC721Supply",
									href: `${extensionsSlug}/ERC721Supply`,
								},
							],
						},
						{
							name: "ERC-1155",
							links: [
								{
									name: "ERC1155",
									href: `${extensionsSlug}/ERC1155`,
								},
								{
									name: "ERC1155BatchMintable",
									href: `${extensionsSlug}/ERC1155BatchMintable`,
								},
								{
									name: "ERC1155Burnable",
									href: `${extensionsSlug}/ERC1155Burnable`,
								},
								{
									name: "ERC1155ClaimConditions",
									href: `${extensionsSlug}/ERC1155ClaimConditions`,
								},
								{
									name: "ERC1155ClaimCustom",
									href: `${extensionsSlug}/ERC1155ClaimCustom`,
								},
								{
									name: "ERC1155ClaimPhases",
									href: `${extensionsSlug}/ERC1155ClaimPhases`,
								},
								{
									name: "ERC1155Claimable",
									href: `${extensionsSlug}/ERC1155Claimable`,
								},
								{
									name: "ERC1155Drop",
									href: `${extensionsSlug}/ERC1155Drop`,
								},
								{
									name: "ERC1155DropSinglePhase",
									href: `${extensionsSlug}/ERC1155DropSinglePhase`,
								},
								{
									name: "ERC1155Enumerable",
									href: `${extensionsSlug}/ERC1155Enumerable`,
								},
								{
									name: "ERC1155Mintable",
									href: `${extensionsSlug}/ERC1155Mintable`,
								},
								{
									name: "ERC1155Revealable",
									href: `${extensionsSlug}/ERC1155Revealable`,
								},
								{
									name: "ERC1155SignatureMint",
									href: `${extensionsSlug}/ERC1155SignatureMint`,
								},
								{
									name: "ERC1155Staking",
									href: `${extensionsSlug}/ERC1155Staking`,
								},
								{
									name: "ERC1155Supply",
									href: `${extensionsSlug}/ERC1155Supply`,
								},
							],
						},
						{
							name: "ERC-4337",
							links: [
								{
									name: "AccountExtension",
									href: `${extensionsSlug}/erc-4337/AccountExtension`,
								},
								{
									name: "SmartWallet",
									href: `${extensionsSlug}/erc-4337/SmartWallet`,
								},
								{
									name: "SmartWalletFactory",
									href: `${extensionsSlug}/erc-4337/SmartWalletFactory`,
								},
							],
						},
					],
				},
			],
		},
		{ separator: true },
		// deploy
		{
			name: "Deploy",
			icon: <ContractDeployIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${deploySlug}/overview`,
				},
				{
					name: "Deploy Contract",
					href: `${deploySlug}/deploy-contract`,
				},
				{
					name: "CLI Reference",
					href: `${deploySlug}/reference`,
				},
			],
		},
		{ separator: true },
		// publish
		{
			name: "Publish",
			icon: <ContractPublishIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${publishSlug}/overview`,
				},
				{
					name: "Publish Contract",
					href: `${publishSlug}/publish-contract`,
				},
				{
					name: "Publish Options",
					href: `${publishSlug}/publish-options`,
				},
			],
		},
		{ separator: true },
		// interact
		{
			name: "Interact",
			icon: <ContractInteractIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${interactSlug}/overview`,
				},
			],
		},
		{ separator: true },
		// resources
		{
			name: "Resources",
			isCollapsible: false,
			links: [
				{
					name: "Design Docs",
					links: [
						{
							name: "Drop",
							href: `${designDocs}/drop`,
						},
						{
							name: "Marketplace",
							href: `${designDocs}/marketplace`,
						},
						{
							name: "Multiwrap",
							href: `${designDocs}/multiwrap`,
						},
						{
							name: "Pack",
							href: `${designDocs}/pack`,
						},
						{
							name: "Signature Mint",
							href: `${designDocs}/signature-mint`,
						},
					],
				},
				{
					name: "FAQs",
					href: "/contracts/faq",
				},
			],
		},
	],
};
