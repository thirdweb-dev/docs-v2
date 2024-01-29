import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";

export async function fetchTypeScriptDoc(version: string) {
	let src =
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/sdk/typedoc/documentation.json";

	if (version === "v5") {
		src =
			"https://raw.githubusercontent.com/thirdweb-dev/js/alpha/packages/thirdweb/typedoc/documentation.json";
	}

	const doc = await fetchJSON(src);
	return transform(doc as any);
}
