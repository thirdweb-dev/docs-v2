import { SomeDoc } from "@/app/references/components/TDoc/types";
import { TransformedDoc } from "typedoc-better-json";
import { LinkGroup } from "../../../../../components/others/Sidebar";

export function getSidebarLinkGroups(doc: TransformedDoc, path: string) {
	const linkGroups: LinkGroup[] = [];

	function createLinkGroup(name: string, docs: SomeDoc[]) {
		linkGroups.push({
			group: name,
			links: docs.map((d) => ({
				name: d.name,
				href: `${path}/${d.name}`,
			})),
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
