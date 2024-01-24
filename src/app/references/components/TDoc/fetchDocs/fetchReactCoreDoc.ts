import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";

export async function fetchReactCoreDoc() {
	const doc = await fetchJSON(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/react-core/typedoc/documentation.json",
	);
	return transform(doc as any);
}
