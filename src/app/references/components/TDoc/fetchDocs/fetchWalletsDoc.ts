import { transform } from "typedoc-better-json";

export async function fetchWalletsDoc() {
	const res = await fetch(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/wallets/typedoc/documentation.json",
		{
			cache: "no-store",
		},
	);
	const doc = await res.json();
	return transform(doc as any);
}
