import type { TransformedDoc } from "typedoc-better-json";
import doc from "./test/wallets.json";

export async function fetchWalletsDoc(): Promise<TransformedDoc> {
	return doc as TransformedDoc;
}
