import { transform } from "typedoc-better-json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";

export async function fetchReactDoc() {
	const doc = await import("./test/react.json");
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
