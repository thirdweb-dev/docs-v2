import { LinkMap } from "@/app/references/components/TDoc/utils/slugs";
import { serverContext } from "@/lib/serverContext";

export const linkMapContext = serverContext<LinkMap>();

export function getTokenLinks(
	references: string[],
): Map<string, string> | undefined {
	const linkMap = linkMapContext.get();
	if (!linkMap) {
		return undefined;
	}
	const map = new Map<string, string>();
	references.forEach((reference) => {
		const token = linkMap.get(reference);
		if (token) {
			map.set(reference, token);
		}
	});

	return map;
}
