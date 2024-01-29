import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";

export async function fetchTypeScriptAlphaDoc() {
	const doc = await fetchJSON(
		"https://raw.githubusercontent.com/thirdweb-dev/js/alpha/packages/thirdweb/typedoc/documentation.json",
	);
	return transform(doc as any);
}
