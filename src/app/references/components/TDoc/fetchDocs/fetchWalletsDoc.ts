import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";

export async function fetchWalletsDoc() {
	const doc = await fetchJSON(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/wallets/typedoc/documentation.json",
	);
	return transform(doc as any);
}
