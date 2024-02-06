import { transform } from "typedoc-better-json";
import { fetchReactCoreDoc } from "./fetchReactCoreDoc";
import { mergeDocs } from "./mergeDocs";
import { fetchJSON } from "@/lib/fetchJSON";
import { unstable_cache } from "next/cache";

const URL =
	"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/react-native/typedoc/documentation.json.gz";
const getDoc = unstable_cache(() => fetchJSON(URL), [URL], {
	// revalidate at most every 15 minutes
	revalidate: 15 * 60 * 1000,
});
export async function fetchReactNativeDoc() {
	const doc = await getDoc();
	const reactCoreDoc = await fetchReactCoreDoc();
	return mergeDocs(reactCoreDoc, transform(doc as any));
}
