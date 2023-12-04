import { transform } from "typedoc-better-json";
import doc from "./test/react-core.json";

export async function fetchReactCoreDoc() {
	return transform(doc as any);
}
