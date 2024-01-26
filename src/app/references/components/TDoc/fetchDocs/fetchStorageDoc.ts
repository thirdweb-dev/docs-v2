import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";

export async function fetchStorageDoc() {
	const doc = await fetchJSON(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/storage/typedoc/documentation.json",
	);
	return transform(doc as any);
}
