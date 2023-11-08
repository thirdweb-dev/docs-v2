import type { TransformedDoc } from "typedoc-better-json";
import doc from "./test/storage.json";

export async function fetchStorageDoc(): Promise<TransformedDoc> {
	return doc as TransformedDoc;
}
