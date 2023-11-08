import type { TransformedDoc } from "typedoc-better-json";
import doc from "./test/react.json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";

export async function fetchReactDoc(): Promise<TransformedDoc> {
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, doc as TransformedDoc);
}
