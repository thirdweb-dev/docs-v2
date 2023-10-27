import { SomeDoc } from "@/components/RenderDoc/types";
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
	const slugToDocMap: Record<string, SomeDoc | undefined> = {};

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
