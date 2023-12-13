import { transform } from "typedoc-better-json";

export async function fetchTypeScriptDoc() {
	const doc = await import("./test/typescript.json");
	return transform(doc as any);
}
