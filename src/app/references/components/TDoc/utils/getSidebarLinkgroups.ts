import { SomeDoc } from "@/app/references/components/TDoc/types";
import { BlockTag, TransformedDoc } from "typedoc-better-json";
import {
	LinkGroup,
	SidebarLink,
} from "../../../../../components/others/Sidebar";

const tagsToGroup = {
	"@contract": "Contract",
	"@claimConditions": "Claim Conditions",
	"@nftDrop": "NFT Drop",
	"@platformFees": "Royalty & Fees",
	"@nft": "NFT",
	"@metadata": "Metadata",
	"@permissionControl": "Permissions Control",
	"@networkConnection": "Network Connection",
	"@delayedReveal": "Delayed Reveal",
	"@marketplace": "Marketplace",
	"@walletConnection": "Wallet Connection",
	"@walletUtils": "Wallet Utilities",
	"@token": "Tokens",
	"@auth": "Auth",
	"@smartWallet": "Smart Wallet",
	"@connectWallet": "Connect Wallet",
	"@appURI": "App URI",
	"@storage": "Storage",
	"@others": "Others",
	"@wallet": "Wallets",
	"@walletConfig": "WalletConfig",
	"@theme": "Theme",
	"@locale": "Locale",
	"@abstractWallet": "Abstract Wallets",
	"@extension": "Extensions",
	"@rpc": "RPC",
	"@transaction": "Transactions",
} as const;

type TagKey = keyof typeof tagsToGroup;

const sidebarGroupOrder: TagKey[] = [
	"@wallet",
	"@abstractWallet",
	"@theme",
	"@locale",
	"@contract",
	"@networkConnection",
	"@walletConnection",
	"@walletUtils",
	"@nft",
	"@nftDrop",
	"@claimConditions",
	"@delayedReveal",
	"@token",
	"@marketplace",
	"@metadata",
	"@permissionControl",
	"@platformFees",
	"@auth",
	"@storage",
	"@smartWallet",
	"@connectWallet",
	"@appURI",
	"@extension",
	"@transaction",
	"@rpc",
	"@walletConfig",
	"@others",
];

function findTag(
	blockTags?: BlockTag[],
): [TagKey, ExtensionName | undefined] | undefined {
	if (!blockTags) {
		return;
	}

	for (const blockTag of blockTags) {
		if (blockTag.tag in tagsToGroup) {
			return [blockTag.tag as TagKey, getExtensionName(blockTag)];
		}
	}
}

function getCustomTag(
	doc: SomeDoc,
): [TagKey, ExtensionName | undefined] | undefined {
	switch (doc.kind) {
		case "class": {
			return findTag(doc.blockTags);
		}
		case "function": {
			if (doc.signatures && doc.signatures[0] && doc.signatures[0].blockTags) {
				return findTag(doc.signatures?.[0].blockTags);
			}
			return undefined;
		}

		case "variable": {
			return findTag(doc.blockTags);
		}

		case "enum": {
			return findTag(doc.blockTags);
		}

		case "accessor": {
			return findTag(doc.blockTags);
		}

		case "type": {
			return findTag(doc.blockTags);
		}
	}
}

export function getSidebarLinkGroups(doc: TransformedDoc, path: string) {
	const linkGroups: LinkGroup[] = [];

	// group links by tags
	function createSubGroups(name: string, docs: SomeDoc[]) {
		const groups: {
			[K in TagKey]?: SomeDoc[];
		} = {};

		const ungroupedLinks: SomeDoc[] = [];

		const extensions = docs.filter((d) => {
			const [tag] = getCustomTag(d) || [];
			return tag === "@extension";
		});
		// sort extensions into their own groups
		if (extensions.length) {
			const extensionGroups = extensions.reduce(
				(acc, d) => {
					const [, extensionName] = getCustomTag(d) || [];
					if (extensionName) {
						if (!acc[extensionName]) {
							acc[extensionName] = [];
						}
						acc[extensionName]!.push(d);
					}
					return acc;
				},
				{} as Record<ExtensionName, SomeDoc[]>,
			);
			const extensionLinkGroups = Object.entries(extensionGroups).map(
				([extensionName, docs]) => {
					const links = docs.map((d) => ({
						name: d.name,
						href: `${path}/${extensionName.toLowerCase()}/${d.name}`,
					}));
					return {
						name: extensionName,
						links,
					};
				},
			);
			if (!linkGroups.find((group) => group.name === name)) {
				linkGroups.push({
					name: name,
					links: [{ name: "Extensions", links: extensionLinkGroups }],
				});
			} else {
				linkGroups
					.find((group) => group.name === name)!
					.links.push({ name: "Extensions", links: extensionLinkGroups });
			}
		}

		const nonExtensions = docs.filter((d) => {
			const [tag] = getCustomTag(d) || [];
			return tag !== "@extension";
		});

		// sort into groups
		nonExtensions.forEach((d) => {
			const [tag] = getCustomTag(d) || [];

			if (tag) {
				if (!groups[tag]) {
					groups[tag] = [];
				}
				groups[tag]!.push(d);
			} else {
				ungroupedLinks.push(d);
			}
		});

		// If a group only has one item, do not create a group for it and add it to noGroups
		for (const _tag in groups) {
			const tag = _tag as TagKey;
			const links = groups[tag];
			if (links && links.length === 1 && links[0]) {
				ungroupedLinks.push(links[0]);
				delete groups[tag];
			}
		}

		// throw error if we don't know where to put the group in sidebar ( because this leads to it not being added in sidebar at all )
		Object.keys(groups).forEach((tag) => {
			if (!sidebarGroupOrder.includes(tag as TagKey)) {
				throw new Error(`${tag} not added in sidebarGroupOrder array`);
			}
		});

		const links: SidebarLink[] = [];

		const addGroup = (tag: TagKey) => {
			const groupDocs = groups[tag];
			if (!groupDocs) {
				return;
			}

			links.push({
				name: tagsToGroup[tag],
				links: groupDocs.map((d) => ({
					name: d.name,
					href: `${path}/${d.name}`,
				})),
			});
		};

		sidebarGroupOrder.forEach((tag) => {
			addGroup(tag);
		});

		ungroupedLinks.forEach((d) => {
			links.push({
				name: d.name,
				href: `${path}/${d.name}`,
			});
		});

		if (!linkGroups.find((group) => group.name === name)) {
			linkGroups.push({
				name: name,
				links: links,
			});
		} else {
			linkGroups.find((group) => group.name === name)!.links.push(...links);
		}
	}

	if (doc.components) {
		createSubGroups("Components", doc.components);
	}

	if (doc.hooks) {
		createSubGroups("Hooks", doc.hooks);
	}

	if (doc.classes) {
		createSubGroups("Classes", doc.classes);
	}

	if (doc.functions) {
		createSubGroups("Functions", doc.functions);
	}

	if (doc.variables) {
		createSubGroups("Variables", doc.variables);
	}

	if (doc.types) {
		createSubGroups("Types", doc.types);
	}

	if (doc.enums) {
		createSubGroups("Enums", doc.enums);
	}

	return linkGroups;
}

export function getExtensionName(
	extensionBlockTag: BlockTag,
): ExtensionName | undefined {
	try {
		const extensionNameString = (
			extensionBlockTag?.summary?.[0]?.children?.[0]?.value || "COMMON"
		).toUpperCase();

		if (isValidExtensionString(extensionNameString)) {
			return extensionNameString;
		}
		return undefined;
	} catch {
		return undefined;
	}
}

const EXTENSION_NAMES = ["ERC721", "ERC20", "ERC1155", "COMMON"] as const;
type ExtensionName = (typeof EXTENSION_NAMES)[number];

function isValidExtensionString(
	extensionName: string,
): extensionName is ExtensionName {
	// @ts-expect-error - this is what we're trying to check here TS...
	return EXTENSION_NAMES.includes(extensionName.toUpperCase());
}
