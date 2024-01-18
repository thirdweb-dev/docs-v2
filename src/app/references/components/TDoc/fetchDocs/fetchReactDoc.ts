import { transform } from "typedoc-better-json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";

export async function fetchReactDoc() {
	const res = await fetch(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/react/typedoc/documentation.json",
		{
			cache: "no-store",
		},
	);
	const doc = await res.json();
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
