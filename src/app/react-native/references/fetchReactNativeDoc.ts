import type { TransformedDoc } from "typedoc-better-json";
import _reactNativeDoc from "./test/react-native-docs.json";
import _reactCoreDoc from "./test/react-core-docs.json";

export async function fetchReactNativeDoc(): Promise<TransformedDoc> {
	// const res = await fetch(
	// 	"https://cf-ipfs.com/ipfs/QmZuGsqdSGUogkQiz4WzxcbpVA2DaWXC2NGbxruLriAMmi/documentation.json",
	// );

	// if (!res.ok) {
	// 	throw new Error("Failed to fetch TypeScript SDK references");
	// }

	// return (await res.json()) as TransformedDoc;

	const reactCoreDoc = _reactCoreDoc as TransformedDoc;
	const reactDoc = _reactNativeDoc as TransformedDoc;

	const mergedDoc: TransformedDoc = {
		functions: mergeArrays(reactCoreDoc.functions, reactDoc.functions),
		classes: mergeArrays(reactCoreDoc.classes, reactDoc.classes),
		components: mergeArrays(reactCoreDoc.components, reactDoc.components),
		enums: mergeArrays(reactCoreDoc.enums, reactDoc.enums),
		hooks: mergeArrays(reactCoreDoc.hooks, reactDoc.hooks),
		types: mergeArrays(reactCoreDoc.types, reactDoc.types),
		variables: mergeArrays(reactCoreDoc.variables, reactDoc.variables),
	};

	return mergedDoc;
}

function mergeArrays<T>(arr1?: T[], arr2?: T[]) {
	const arr = [...(arr1 || []), ...(arr2 || [])];
	if (arr.length === 0) {
		return undefined;
	}
	return arr;
}
