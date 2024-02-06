import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";
import { unstable_cache } from "next/cache";

const URL =
	"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/react-core/typedoc/documentation.json.gz";
const getDoc = unstable_cache(() => fetchJSON(URL), [URL], {
	// revalidate at most every 15 minutes
	revalidate: 15 * 60 * 1000,
});

export async function fetchReactCoreDoc() {
	return transform(await getDoc());
}
