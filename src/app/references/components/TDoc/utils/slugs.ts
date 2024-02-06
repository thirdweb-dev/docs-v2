import { SomeDoc } from "@/app/references/components/TDoc/types";
import { TransformedDoc } from "typedoc-better-json";
import { getExtensionName } from "./getSidebarLinkgroups";

export function fetchAllSlugs(doc: TransformedDoc) {
	const names: string[] = [];

	for (const key in doc) {
		const value = doc[key as keyof TransformedDoc];
		if (Array.isArray(value)) {
			value.forEach((v) => {
				if (v.kind === "function") {
					const extensionBlockTag = v.signatures
						?.find((s) => s.blockTags?.some((tag) => tag.tag === "@extension"))
						?.blockTags?.find((tag) => tag.tag === "@extension");

					if (extensionBlockTag) {
						const extensionName = getExtensionName(extensionBlockTag);
						if (extensionName) {
							names.push(`${extensionName.toLowerCase()}/${v.name}`);
							// skip to next loop
							return;
						}
					}
				}

				names.push(v.name);
			});
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
				if (v.kind === "function") {
					const extensionBlockTag = v.signatures
						?.find((s) => s.blockTags?.some((tag) => tag.tag === "@extension"))
						?.blockTags?.find((tag) => tag.tag === "@extension");

					if (extensionBlockTag) {
						const extensionName = getExtensionName(extensionBlockTag);
						if (extensionName) {
							const name = `${extensionName.toLowerCase()}/${v.name}`;

							slugToDocMap[name] = v;
							// skip to next loop
							return;
						}
					}
				}
				slugToDocMap[v.name] = v;
			});
		}
	}

	return slugToDocMap;
}

export function getLinkMap(doc: TransformedDoc, path: string) {
	const linkMap: Map<string, string> = new Map();
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
