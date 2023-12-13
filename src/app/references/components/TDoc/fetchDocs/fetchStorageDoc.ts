import { transform } from "typedoc-better-json";

export async function fetchStorageDoc() {
	const doc = await import("./test/storage.json");
	return transform(doc as any);
}
