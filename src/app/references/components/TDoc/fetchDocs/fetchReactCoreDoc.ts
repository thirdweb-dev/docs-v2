import { transform } from "typedoc-better-json";

export async function fetchReactCoreDoc() {
	const doc = await import("./test/react-core.json");
	return transform(doc as any);
}
