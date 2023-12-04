import { transform } from "typedoc-better-json";
import doc from "./test/typescript.json";

export async function fetchTypeScriptDoc() {
	return transform(doc as any);
}
