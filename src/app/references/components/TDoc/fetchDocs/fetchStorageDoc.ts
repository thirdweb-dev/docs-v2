import { transform } from "typedoc-better-json";
import doc from "./test/storage.json";

export async function fetchStorageDoc() {
	return transform(doc as any);
}
