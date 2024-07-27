import { SideBar } from "@/components/Layouts/DocLayout";
import {
	ContractModularContractIcon,
	ContractExploreIcon,
	ContractDeployIcon,
	ContractPublishIcon,
} from "@/icons";

const prebuiltSlug = "/contracts/explore/pre-built-contracts";
const modularContractsSlug = "/contracts/modular-contracts";
const deploySlug = "/contracts/deploy";
const publishSlug = "/contracts/publish";
const designDocs = "/contracts/design-docs";
const extensionsContractsSlug = "/contracts/modular-contracts/extension-contracts";
const coreContractsSlug = "/contracts/modular-contracts/core-contracts";

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
									name: "Managed Account Factory",
									href: `${prebuiltSlug}/managed-account-factory`,
								},
							],
						},
						{
							name: "MISC.",
							links: [
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
			name: "Modular Contracts",
			icon: <ContractModularContractIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${modularContractsSlug}/overview`,
				},
				{
					name: "Get Started",
					href: `${modularContractsSlug}/get-started`,
				},
				{
					name: "How it works",
					href: `${modularContractsSlug}/how-it-works`,
				},
				// core contracts
				{
					name: "Core Contracts",
					links: [
						{
							name: "ERC-20",
							href: `${coreContractsSlug}/erc-20`,
						},
						{
							name: "ERC-721",
							href: `${coreContractsSlug}/erc-721`,
						},
						{
							name: "ERC-1155",
							href: `${coreContractsSlug}/erc-1155`,
						},
					],
				},
				// extensions
				{
					name: "Extension Contracts",
					links: [
						{
							name: "ERC-20",
							links: [
								{
									name: "Minting",
									links: [
										{
											name: "ClaimableERC20",
											href: `${extensionsContractsSlug}/erc-20/minting/claimableERC20`,
										},
										{
											name: "MintableERC20",
											href: `${extensionsContractsSlug}/erc-20/minting/mintableERC20`,
										}
									]
								},
								{
									name: "Misc",
									links: [
										{
											name: "TransferableERC20",
											href: `${extensionsContractsSlug}/erc-20/misc/transferableERC20`,
										}
									]
								}
							]
						},
						{
							name: "ERC-721",
							links: [
								{
									name: "Metadata",
									links: [
										{
											name: "BatchMetadataERC721",
											href: `${extensionsContractsSlug}/erc-721/metadata/batchMetadataERC721`,
										},
										{
											name: "DelayedRevealBatchMetadataERC721",
											href: `${extensionsContractsSlug}/erc-721/metadata/delayedRevealBatchMetadataERC721`,
										},
										{
											name: "OpenEditionMetadataERC721",
											href: `${extensionsContractsSlug}/erc-721/metadata/openEditionMetadataERC721`,
										},
										{
											name: "SimpleMetadtaERC721",
											href: `${extensionsContractsSlug}/erc-721/metadata/simpleMetadataERC721`,
										}
									],
								},
								{
									name: "Minting",
									links: [
										{
											name: "ClaimableERC721",
											href: `${extensionsContractsSlug}/erc-721/minting/claimableERC721`,
										},
										{
											name: "MintableERC721",
											href: `${extensionsContractsSlug}/erc-721/minting/mintableERC721`,
										}
									],
								},
								{
									name: "Misc",
									links: [
										{
											name: "RoyaltyERC721",
											href: `${extensionsContractsSlug}/erc-721/misc/royaltyERC721`,
										},
										{
											name: "TransferableERC721",
											href: `${extensionsContractsSlug}/erc-721/misc/transferableERC721`,
										}
									],
								}
							],
						},
						{
							name: "ERC-1155",
							links: [
								{
									name: "Metadata",
									links: [
										{
											name: "BatchMetadataERC1155",
											href: `${extensionsContractsSlug}/erc-1155/metadata/batchMetadataERC1155`,
										},
										{
											name: "OpenEditionMetadataERC1155",
											href: `${extensionsContractsSlug}/erc-1155/metadata/openEditionMetadataERC1155`,
										},
										{
											name: "SimpleMetadataERC1155",
											href: `${extensionsContractsSlug}/erc-1155/metadata/simpleMetadataERC1155`,
										}
									],
								},
								{
									name: "Minting",
									links: [
										{
											name: "ClaimableERC1155",
											href: `${extensionsContractsSlug}/erc-1155/minting/claimableERC1155`,
										},
										{
											name: "MintableERC1155",
											href: `${extensionsContractsSlug}/erc-1155/minting/mintableERC1155`,
										}
									],
								},
								{
									name: "Misc",
									links: [
										{
											name: "RoyaltyERC1155",
											href: `${extensionsContractsSlug}/erc-1155/misc/royaltyERC1155`,
										},
										{
											name: "TransferableERC1155",
											href: `${extensionsContractsSlug}/erc-1155/misc/transferableERC1155`,
										}
									],
								}
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
				{
					name: "CLI Reference",
					href: `${publishSlug}/reference`,
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
							name: "Modular Contracts",
							href: `${designDocs}/modular-contracts`,
						},
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
			],
		},
	],
};
