import type { TransformedDoc } from "typedoc-better-json";
import doc from "../test/doc.json";

export async function fetchTSDoc(): Promise<TransformedDoc> {
	// const res = await fetch(
	// 	"https://cf-ipfs.com/ipfs/QmZuGsqdSGUogkQiz4WzxcbpVA2DaWXC2NGbxruLriAMmi/documentation.json",
	// );

	// if (!res.ok) {
	// 	throw new Error("Failed to fetch TypeScript SDK references");
	// }

	// return (await res.json()) as TransformedDoc;

	return doc as TransformedDoc;
}
