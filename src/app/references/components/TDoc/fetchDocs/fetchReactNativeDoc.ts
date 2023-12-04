import { transform } from "typedoc-better-json";
import doc from "./test/react-native.json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";

export async function fetchReactNativeDoc() {
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
