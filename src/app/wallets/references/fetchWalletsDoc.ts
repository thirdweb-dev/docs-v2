import type { TransformedDoc } from "typedoc-better-json";
import doc from "./test/wallets-doc.json";

export async function fetchWalletsDoc(): Promise<TransformedDoc> {
	// const res = await fetch(
	// 	"https://cf-ipfs.com/ipfs/QmZuGsqdSGUogkQiz4WzxcbpVA2DaWXC2NGbxruLriAMmi/documentation.json",
	// );

	// if (!res.ok) {
	// 	throw new Error("Failed to fetch TypeScript SDK references");
	// }

	// return (await res.json()) as TransformedDoc;

	return doc as TransformedDoc;
}
