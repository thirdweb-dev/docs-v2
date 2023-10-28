import type { TransformedDoc } from "typedoc-better-json";
import doc from "./test/typescript.json";

export async function fetchTypeScriptDoc(): Promise<TransformedDoc> {
	return doc as TransformedDoc;
}
