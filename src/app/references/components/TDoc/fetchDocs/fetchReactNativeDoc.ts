import { transform } from "typedoc-better-json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";
import { fetchJSON } from "@/lib/fetchJSON";

export async function fetchReactNativeDoc() {
	const doc = await fetchJSON(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/react-native/typedoc/documentation.json.gz",
	);
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
