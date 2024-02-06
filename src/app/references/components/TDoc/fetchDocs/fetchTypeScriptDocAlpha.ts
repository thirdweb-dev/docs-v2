import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";
import { withCache } from "../../../../../lib/withCache";

export async function fetchTypeScriptAlphaDoc() {
	const URL =
		"https://raw.githubusercontent.com/thirdweb-dev/js/alpha/packages/thirdweb/typedoc/documentation.json";
	const doc = await withCache(() => fetchJSON(URL), {
		cacheKey: URL,
		// cache for 10min
		cacheTime: 10 * 60 * 1000,
	});
	return transform(doc as any);
}
