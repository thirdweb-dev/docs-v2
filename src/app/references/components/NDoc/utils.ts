import { LinkGroup } from "../../../../components/others/Sidebar";
import { NRootDocType, SomeNDocType } from "./types";

export function getNLinkGroups(rootDoc: NRootDocType, path: string) {
	const linkGroups: LinkGroup[] = [];

	const groupKeyToName = {
		classes: "Classes",
		functions: "Functions",
	};

	for (const k in rootDoc) {
		const key = k as keyof NRootDocType;
		const v = rootDoc[key];
		if (Array.isArray(v)) {
			linkGroups.push({
				name: groupKeyToName[key],
				links: v.map((child) => ({
					name: child.name,
					href: `${path}/${child.name}`,
				})),
			});
		}
	}

	return linkGroups;
}

export function getSlugToNDocMap(rootDoc: NRootDocType) {
	const slugToDocMap: Map<string, SomeNDocType> = new Map();

	for (const k in rootDoc) {
		const key = k as keyof NRootDocType;
		const v = rootDoc[key];
		if (Array.isArray(v)) {
			v.forEach((child) => {
				slugToDocMap.set(child.name, child);
			});
		}
	}

	return slugToDocMap;
}

export function getAllNDocSlugs(rootDoc: NRootDocType) {
	const slugs: string[] = [];

	for (const k in rootDoc) {
		const key = k as keyof NRootDocType;
		const v = rootDoc[key];
		if (Array.isArray(v)) {
			v.forEach((child) => {
				slugs.push(child.name);
			});
		}
	}

	return slugs;
}
