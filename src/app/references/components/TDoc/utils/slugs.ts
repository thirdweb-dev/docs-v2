import { SomeDoc } from "@/app/references/components/TDoc/types";
import { TransformedDoc } from "typedoc-better-json";

export function fetchAllSlugs(doc: TransformedDoc) {
	const names: string[] = [];

	for (const key in doc) {
		const value = doc[key as keyof TransformedDoc];
		if (Array.isArray(value)) {
			value.forEach((v) => names.push(v.name));
		}
	}

	return names;
}

export function getSlugToDocMap(doc: TransformedDoc) {
	const slugToDocMap: Record<string, SomeDoc> = {};

	for (const key in doc) {
		const value = doc[key as keyof TransformedDoc];
		if (Array.isArray(value)) {
			value.forEach((v) => {
				slugToDocMap[v.name] = v;
			});
		}
	}

	return slugToDocMap;
}

export function getLinkMap(doc: TransformedDoc, path: string) {
	const linkMap: LinkMap = new Map();
	for (const key in doc) {
		const value = doc[key as keyof TransformedDoc];
		if (Array.isArray(value)) {
			value.forEach((v) => {
				linkMap.set(v.name, `${path}/${v.name}`);
			});
		}
	}

	return linkMap;
}

export type LinkMap = Map<string, string>;
