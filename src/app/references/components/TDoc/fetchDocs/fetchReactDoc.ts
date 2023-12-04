import { transform } from "typedoc-better-json";
import doc from "./test/react.json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";

export async function fetchReactDoc() {
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
