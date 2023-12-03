import { transform } from "typedoc-better-json";
import doc from "./test/wallets.json";

export async function fetchWalletsDoc() {
	return transform(doc as any);
}
