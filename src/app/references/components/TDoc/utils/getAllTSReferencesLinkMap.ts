import { TransformedDoc } from "typedoc-better-json";
import { fetchReactDoc } from "../fetchDocs/fetchReactDoc";
import { fetchReactNativeDoc } from "../fetchDocs/fetchReactNativeDoc";
import { fetchStorageDoc } from "../fetchDocs/fetchStorageDoc";
import { fetchTypeScriptDoc } from "../fetchDocs/fetchTypeScriptDoc";
import { fetchWalletsDoc } from "../fetchDocs/fetchWalletsDoc";

const validReferenceLinks: Set<string> = new Set();

// TODO: currently we just point to /latest/ for all the links

/**
 * Get the map of all valid reference links for typescript pacakges
 */
export async function getAllTSReferencesLinks() {
	if (validReferenceLinks.size > 0) {
		return validReferenceLinks;
	}

	const [typescriptDoc, reactCode, reactNativeDoc, walletsDoc, storageDoc] =
		await Promise.all([
			fetchTypeScriptDoc("v4"),
			fetchReactDoc(),
			fetchReactNativeDoc(),
			fetchWalletsDoc(),
			fetchStorageDoc(),
		]);

	function addLinks(path: string, doc: TransformedDoc) {
		for (const key in doc) {
			const value = doc[key as keyof TransformedDoc];
			if (Array.isArray(value)) {
				value.forEach((v) => {
					validReferenceLinks.add(`/references/${path}/latest/${v.name}`);
				});
			}
		}
	}

	addLinks("typescript", typescriptDoc);
	addLinks("react", reactCode);
	addLinks("react-native", reactNativeDoc);
	addLinks("wallets", walletsDoc);
	addLinks("storage", storageDoc);

	return validReferenceLinks;
}
