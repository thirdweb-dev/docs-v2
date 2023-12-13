import { SideBar } from "@/components/Layouts/DocLayout";

const erc1155BaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "ERC-1155",
		links: [
			{
				name: "ERC1155 Base",
				href: `${parentSlug}/erc1155base`,
			},
			{
				name: "ERC1155 Delayed Reveal",
				href: `${parentSlug}/erc1155delayedreveal`,
			},
			{
				name: "ERC1155 Drop",
				href: `${parentSlug}/erc1155drop`,
			},
			{
				name: "ERC1155 Lazy Mint",
				href: `${parentSlug}/erc1155lazymint`,
			},
			{
				name: "ERC1155 Signature Mint",
				href: `${parentSlug}/erc1155signaturemint`,
			},
		],
	};
})();

const erc721BaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "ERC-721",
		links: [
			{
				name: "ERC721 Base",
				href: `${parentSlug}/erc721base`,
			},
			{
				name: "ERC721 Delayed Reveal",
				href: `${parentSlug}/erc721delayedreveal`,
			},
			{
				name: "ERC721 Drop",
				href: `${parentSlug}/erc721drop`,
			},
			{
				name: "ERC721 Lazy Mint",
				href: `${parentSlug}/erc721lazymint`,
			},
			{
				name: "ERC721 Signature Mint",
				href: `${parentSlug}/erc721signaturemint`,
			},
		],
	};
})();

const erc20BaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "ERC-20",
		links: [
			{
				name: "ERC20 Base",
				href: `${parentSlug}/erc20base`,
			},
			{
				name: "ERC20 Drop",
				href: `${parentSlug}/erc20drop`,
			},
			{
				name: "ERC20 Drop - Vote",
				href: `${parentSlug}/erc20dropvote`,
			},
			{
				name: "ERC20 Vote",
				href: `${parentSlug}/erc20vote`,
			},
			{
				name: "ERC20 Signature Mint",
				href: `${parentSlug}/erc20signaturemint`,
			},
			{
				name: "ERC20 Signature Mint - Vote",
				href: `${parentSlug}/erc20signaturemintvote`,
			},
		],
	};
})();

const simpleAccountBaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "Non-upgradeable Accounts",
		links: [
			{
				name: "Account Factory",
				href: `${parentSlug}/account-factory`,
			},
			{
				name: "Account",
				href: `${parentSlug}/account`,
			},
		],
	};
})();

const managedAccountBaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "Managed Accounts",
		href: `${parentSlug}/managed-account-factory`,
		links: [
			{
				name: "Managed Account Factory",
				href: `${parentSlug}/managed-account-factory`,
			},
			{
				name: "Managed Account",
				href: `${parentSlug}/managed-account`,
			},
		],
	};
})();

const dynamicAccountBaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "Dynamic Accounts",
		href: `${parentSlug}/dynamic-account-factory`,
		links: [
			{
				name: "Dynamic Account Factory",
				href: `${parentSlug}/dynamic-account-factory`,
			},
			{
				name: "Dynamic Account",
				href: `${parentSlug}/dynamic-account`,
			},
		],
	};
})();

const stakingBaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "Staking",
		links: [
			{
				name: "Staking - ERC1155",
				href: `${parentSlug}/staking1155base`,
			},
			{
				name: "Staking - ERC721",
				href: `${parentSlug}/staking721base`,
			},
			{
				name: "Staking - ERC20",
				href: `${parentSlug}/staking20base`,
			},
		],
	};
})();

const smartAccountBaseHooks: SideBar = (() => {
	const parentSlug = "/solidity/base-contracts";
	return {
		name: "Smart Accounts",
		links: [
			{
				name: "Overview",
				href: `${parentSlug}/smart-accounts`,
			},
			simpleAccountBaseHooks,
			dynamicAccountBaseHooks,
			managedAccountBaseHooks,
		],
	};
})();

const baseContracts: SideBar = {
	name: "Base Contracts",
	links: [
		{
			name: "Overview",
			href: "/solidity/base-contracts/",
		},
		erc1155BaseHooks,
		erc721BaseHooks,
		erc20BaseHooks,
		smartAccountBaseHooks,
		stakingBaseHooks,
	],
};

const erc1155ExtensionHooks: SideBar = (() => {
	const parentSlug = "/solidity/extensions";
	return {
		name: "ERC-1155",
		links: [
			{
				name: "ERC1155",
				href: `${parentSlug}/erc1155`,
			},
			{
				name: "ERC1155BatchMintable",
				href: `${parentSlug}/erc1155batchmintable`,
			},
			{
				name: "ERC1155Burnable",
				href: `${parentSlug}/erc1155burnable`,
			},
			{
				name: "ERC1155ClaimConditions",
				href: `${parentSlug}/erc1155claimconditions`,
			},
			{
				name: "ERC1155ClaimCustom",
				href: `${parentSlug}/erc1155claimcustom`,
			},
			{
				name: "ERC1155ClaimPhases",
				href: `${parentSlug}/erc1155claimphases`,
			},
			{
				name: "ERC1155Claimable",
				href: `${parentSlug}/erc1155claimable`,
			},
			{
				name: "ERC1155Drop",
				href: `${parentSlug}/erc1155drop`,
			},
			{
				name: "ERC1155DropSinglePhase",
				href: `${parentSlug}/erc1155dropsinglephase`,
			},
			{
				name: "ERC1155Enumerable",
				href: `${parentSlug}/erc1155enumerable`,
			},
			{
				name: "ERC1155Mintable",
				href: `${parentSlug}/erc1155mintable`,
			},
			{
				name: "ERC1155Revealable",
				href: `${parentSlug}/erc1155revealable`,
			},
			{
				name: "ERC1155SignatureMint",
				href: `${parentSlug}/erc1155signaturemint`,
			},
			{
				name: "ERC1155Staking",
				href: `${parentSlug}/erc1155staking`,
			},
			{
				name: "ERC1155Supply",
				href: `${parentSlug}/erc1155supply`,
			},
		],
	};
})();

const erc721ExtensionHooks: SideBar = (() => {
	const parentSlug = "/solidity/extensions";
	return {
		name: "ERC-721",
		links: [
			{
				name: "ERC721",
				href: `${parentSlug}/erc721`,
			},
			{
				name: "ERC721BatchMintable",
				href: `${parentSlug}/erc721batchmintable`,
			},
			{
				name: "ERC721Burnable",
				href: `${parentSlug}/erc721burnable`,
			},
			{
				name: "ERC721ClaimConditions",
				href: `${parentSlug}/erc721claimconditions`,
			},
			{
				name: "ERC721ClaimCustom",
				href: `${parentSlug}/erc721claimcustom`,
			},
			{
				name: "ERC721ClaimPhases",
				href: `${parentSlug}/erc721claimphases`,
			},
			{
				name: "ERC721Claimable",
				href: `${parentSlug}/erc721claimable`,
			},
			{
				name: "ERC721Enumerable",
				href: `${parentSlug}/erc721enumerable`,
			},
			{
				name: "ERC721Mintable",
				href: `${parentSlug}/erc721mintable`,
			},
			{
				name: "ERC721Revealable",
				href: `${parentSlug}/erc721revealable`,
			},
			{
				name: "ERC721SignatureMint",
				href: `${parentSlug}/erc721signaturemint`,
			},
			{
				name: "ERC721Staking",
				href: `${parentSlug}/erc721staking`,
			},
			{
				name: "ERC721Supply",
				href: `${parentSlug}/erc721supply`,
			},
		],
	};
})();

const erc20ExtensionHooks: SideBar = (() => {
	const parentSlug = "/solidity/extensions";
	return {
		name: "ERC-20",
		links: [
			{
				name: "ERC20",
				href: `${parentSlug}/erc20`,
			},
			{
				name: "ERC20BatchMintable",
				href: `${parentSlug}/erc20batchmintable`,
			},
			{
				name: "ERC20Burnable",
				href: `${parentSlug}/erc20burnable`,
			},
			{
				name: "ERC20ClaimConditions",
				href: `${parentSlug}/erc20claimconditions`,
			},
			{
				name: "ERC20ClaimPhases",
				href: `${parentSlug}/erc20claimphases`,
			},
			{
				name: "ERC20Permit",
				href: `${parentSlug}/erc20permit`,
			},
			{
				name: "ERC20Mintable",
				href: `${parentSlug}/erc20mintable`,
			},
			{
				name: "ERC20SignatureMint",
				href: `${parentSlug}/erc20signaturemint`,
			},
			{
				name: "ERC20Staking",
				href: `${parentSlug}/erc20staking`,
			},
		],
	};
})();

const generalExtensionHooks: SideBar = (() => {
	const parentSlug = "/solidity/extensions";

	return {
		name: "General",
		links: [
			{
				name: "BatchMintMetadata",
				href: `${parentSlug}/batchmintmetadata`,
			},
			{
				name: "ContractMetadata",
				href: `${parentSlug}/contractmetadata`,
			},
			{
				name: "DelayedReveal",
				href: `${parentSlug}/delayedreveal`,
			},
			{
				name: "Drop",
				href: `${parentSlug}/drop`,
			},
			{
				name: "DropSinglePhase",
				href: `${parentSlug}/dropsinglephase`,
			},
			{
				name: "LazyMint",
				href: `${parentSlug}/lazymint`,
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
				href: `${parentSlug}/permissionsenumerable`,
			},
			{
				name: "PlatforFee",
				href: `${parentSlug}/platformfee`,
			},
			{
				name: "PrimarySale",
				href: `${parentSlug}/primarysale`,
			},
			{
				name: "Royalty",
				href: `${parentSlug}/royalty`,
			},
		],
	};
})();

const smartAccountExtensionHooks: SideBar = (() => {
	const parentSlug = "/solidity/extensions";

	return {
		name: "Smart Account",
		links: [
			{
				name: "AccountExtension",
				href: `${parentSlug}/account-extension`,
			},
			{
				name: "SmartWallet",
				href: `${parentSlug}/base-account`,
			},
			{
				name: "SmartWalletFactory",
				href: `${parentSlug}/base-account-factory`,
			},
		],
	};
})();

const extensionContracts: SideBar = {
	name: "Extensions",
	links: [
		{
			name: "Overview",
			href: `/solidity/extensions/`,
		},
		erc1155ExtensionHooks,
		erc721ExtensionHooks,
		erc20ExtensionHooks,
		generalExtensionHooks,
		smartAccountExtensionHooks,
	],
};

export const sidebar: SideBar = {
	name: "Solidity SDK",
	links: [
		{
			name: "Overview",
			href: "/solidity",
		},
		{
			name: "Getting Started",
			href: "/solidity/getting-started",
		},
		{
			name: "FAQs",
			href: "/solidity/faqs",
		},
		baseContracts,
		extensionContracts,
	],
};
