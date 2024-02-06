import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";

import { unstable_cache } from "next/cache";

const URLv4 =
	"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/sdk/typedoc/documentation.json.gz";
const getv4Doc = unstable_cache(() => fetchJSON(URLv4), [URLv4], {
	// revalidate at most every 15 minutes
	revalidate: 15 * 60 * 1000,
});

const URLv5 =
	"https://raw.githubusercontent.com/thirdweb-dev/js/alpha/packages/thirdweb/typedoc/documentation.json.gz";

const getv5Doc = unstable_cache(() => fetchJSON(URLv5), [URLv5], {
	// revalidate at most every 15 minutes
	revalidate: 15 * 60 * 1000,
});

export async function fetchTypeScriptDoc(version: string) {
	let doc;
	if (version === "v5") {
		doc = await getv5Doc();
	} else {
		doc = await getv4Doc();
	}

	return transform(doc as any);
}
