import { TokenInfo } from "typedoc-better-json";
import { getAllTSReferencesLinks } from "./getAllTSReferencesLinkMap";

export async function getTokenLinks(
	tokens: TokenInfo[],
): Promise<Map<string, string>> {
	const linkMap = new Map<string, string>();
	const validReferenceLinks = await getAllTSReferencesLinks();

	function setLink(key: string, value: string) {
		if (validReferenceLinks.has(value)) {
			linkMap.set(key, value);
		}
	}

	tokens.forEach((token) => {
		if (token.package) {
			switch (token.package) {
				case "@thirdweb-dev/react": {
					setLink(token.name, `/references/react/${token.name}`);
					break;
				}

				case "@thirdweb-dev/react-native": {
					setLink(token.name, `/references/react-native/${token.name}`);
					break;
				}

				case "@thirdweb-dev/sdk": {
					setLink(token.name, `/references/typescript/${token.name}`);
					break;
				}

				case "@thirdweb-dev/storage": {
					setLink(token.name, `/references/storage/${token.name}`);
					break;
				}

				case "@thirdweb-dev/wallets": {
					setLink(token.name, `/references/wallets/${token.name}`);
					break;
				}
			}
		}
	});

	return linkMap;
}
