import { LinkGroup } from "../others/Sidebar";
import { NRootDoc, SomeNDoc } from "./types";

export function getNLinkMap(
	rootDoc: NRootDoc,
	path: string,
): Map<string, string> {
	const linkMap: Map<string, string> = new Map();

	for (const k in rootDoc) {
		const v = rootDoc[k as keyof NRootDoc];
		if (Array.isArray(v)) {
			v.forEach((child) => {
				linkMap.set(child.name, `${path}/${child.name}`);
			});
		}
	}

	return linkMap;
}

export function getNLinkGroups(rootDoc: NRootDoc, path: string) {
	const linkGroups: LinkGroup[] = [];

	const groupKeyToName = {
		classes: "Classes",
		functions: "Functions",
	};

	for (const k in rootDoc) {
		const key = k as keyof NRootDoc;
		const v = rootDoc[key];
		if (Array.isArray(v)) {
			linkGroups.push({
				group: groupKeyToName[key],
				links: v.map((child) => ({
					name: child.name,
					href: `${path}/${child.name}`,
				})),
			});
		}
	}

	return linkGroups;
}

export function getSlugToNDocMap(rootDoc: NRootDoc) {
	const slugToDocMap: Map<string, SomeNDoc> = new Map();

	for (const k in rootDoc) {
		const key = k as keyof NRootDoc;
		const v = rootDoc[key];
		if (Array.isArray(v)) {
			v.forEach((child) => {
				slugToDocMap.set(child.name, child);
			});
		}
	}

	return slugToDocMap;
}

export function getAllNDocSlugs(rootDoc: NRootDoc) {
	const slugs: string[] = [];

	for (const k in rootDoc) {
		const key = k as keyof NRootDoc;
		const v = rootDoc[key];
		if (Array.isArray(v)) {
			v.forEach((child) => {
				slugs.push(child.name);
			});
		}
	}

	return slugs;
}
