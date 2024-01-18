import { transform } from "typedoc-better-json";

export async function fetchReactCoreDoc() {
	const res = await fetch(
		"https://raw.githubusercontent.com/thirdweb-dev/js/main/packages/react-core/typedoc/documentation.json",
		{
			cache: "no-store",
		},
	);
	const doc = await res.json();
	return transform(doc as any);
}
