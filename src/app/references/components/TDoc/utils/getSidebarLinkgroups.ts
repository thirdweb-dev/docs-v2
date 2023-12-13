import { SomeDoc } from "@/app/references/components/TDoc/types";
import { BlockTag, TransformedDoc } from "typedoc-better-json";
import {
	LinkGroup,
	SidebarLink,
} from "../../../../../components/others/Sidebar";

function getCustomTag(doc: SomeDoc): string | undefined {
	function findTag(blockTags?: BlockTag[]): string | undefined {
		if (!blockTags) {
			return;
		}
		const tag = blockTags.find((t) => t.tag === "@tags");
		if (
			tag &&
			tag.summary &&
			tag.summary[0] &&
			tag.summary[0].type === "paragraph" &&
			tag.summary[0].children[0] &&
			tag.summary[0].children[0].type === "text"
		) {
			return tag.summary[0].children[0].value;
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

	function createLinkGroup(name: string, docs: SomeDoc[]) {
		const groups: Record<string, SomeDoc[]> = {};
		const noGroups: SomeDoc[] = [];

		docs.forEach((d) => {
			const tag = getCustomTag(d);

			if (tag) {
				if (!groups[tag]) {
					groups[tag] = [];
				}
				groups[tag]!.push(d);
			} else {
				noGroups.push(d);
			}
		});

		const links: SidebarLink[] = [];

		Object.entries(groups).forEach(([tag, docs]) => {
			links.push({
				name: tag,
				links: docs.map((d) => ({
					name: d.name,
					href: `${path}/${d.name}`,
				})),
			});
		});

		noGroups.forEach((d) => {
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
		createLinkGroup("Components", doc.components);
	}

	if (doc.hooks) {
		createLinkGroup("Hooks", doc.hooks);
	}

	if (doc.classes) {
		createLinkGroup("Classes", doc.classes);
	}

	if (doc.functions) {
		createLinkGroup("Functions", doc.functions);
	}

	if (doc.variables) {
		createLinkGroup("Variables", doc.variables);
	}

	if (doc.types) {
		createLinkGroup("Types", doc.types);
	}

	if (doc.enums) {
		createLinkGroup("Enums", doc.enums);
	}

	return linkGroups;
}
