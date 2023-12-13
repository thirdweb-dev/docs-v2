import { transform } from "typedoc-better-json";

export async function fetchWalletsDoc() {
	const doc = await import("./test/wallets.json");
	return transform(doc as any);
}
