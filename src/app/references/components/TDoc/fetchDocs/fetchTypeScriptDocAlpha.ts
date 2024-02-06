import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";
import { unstable_cache } from "next/cache";

const URL =
	"https://raw.githubusercontent.com/thirdweb-dev/js/alpha/packages/thirdweb/typedoc/documentation.json";
const getDoc = unstable_cache(() => fetchJSON(URL), [URL], {
	// revalidate at most every 15 minutes
	revalidate: 15 * 60 * 1000,
});

export async function fetchTypeScriptAlphaDoc() {
	const doc = await getDoc();
	return transform(doc as any);
}
