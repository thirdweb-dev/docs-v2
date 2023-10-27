import { LinkGroup } from "@/components/Reference/types";
import { PythonReference } from "./fetchPythonReference";

export function getSidebarLinkGroups(doc: PythonReference): LinkGroup[] {
	return [
		{
			group: "Classes",
			links: doc.types.map((cls) => {
				return {
					name: cls.typeName,
					href: `/python/references/${cls.typeName}`,
				};
			}),
		},
	];
}
