import type { TransformedDoc } from "typedoc-better-json";
import doc from "./test/react-core.json";

export async function fetchReactCoreDoc(): Promise<TransformedDoc> {
	return doc as TransformedDoc;
}
