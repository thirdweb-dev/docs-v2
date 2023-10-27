import { LinkGroup } from "@/components/Reference/types";
import { GoReference } from "./fetchGoReference";

export function getSidebarLinkGroups(goReference: GoReference): LinkGroup[] {
	return [
		{
			group: "Classes",
			links: goReference.types.map((type) => {
				return {
					name: type.typeName,
					href: `/go/references/${type.typeName}`,
				};
			}),
		},
		{
			group: "Functions",
			links: goReference.functions.map((func) => {
				return {
					name: func.functionName,
					href: `/go/references/${func.functionName}`,
				};
			}),
		},
	];
}
