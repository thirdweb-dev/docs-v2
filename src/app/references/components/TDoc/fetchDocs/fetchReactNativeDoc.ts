import { transform } from "typedoc-better-json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";

export async function fetchReactNativeDoc() {
	const doc = await import("./test/react-native.json");
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
