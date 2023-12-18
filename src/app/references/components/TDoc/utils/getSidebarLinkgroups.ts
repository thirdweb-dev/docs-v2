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
	"@token": "Tokens",
	"@auth": "Auth",
	"@smartWallet": "Smart Wallet",
	"@connectWallet": "Connect Wallet",
	"@appURI": "App URI",
	"@storage": "Storage",
	"@others": "Others",
	"@wallet": "Wallets",
	"@theme": "Theme",
	"@locale": "Locale",
} as const;

type TagKey = keyof typeof tagsToGroup;

const sidebarGroupOrder: TagKey[] = [
	// react
	"@wallet",
	"@theme",
	"@locale",
	// react-core
	"@contract",
	"@networkConnection",
	"@walletConnection",
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
	"@others",
];

function getCustomTag(doc: SomeDoc): TagKey | undefined {
	function findTag(blockTags?: BlockTag[]): TagKey | undefined {
		if (!blockTags) {
			return;
		}

		for (const blockTag of blockTags) {
			if (blockTag.tag in tagsToGroup) {
				return blockTag.tag as TagKey;
			}
		}
	}

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

		// sort into groups
		docs.forEach((d) => {
			const tag = getCustomTag(d);

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

		linkGroups.push({
			name: name,
			links: links,
		});
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
