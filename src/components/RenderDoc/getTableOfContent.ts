import { SomeDoc } from "./types";
import { TableOfContentNode } from "../Layouts/TableContentLayout";

export function getTableOfContent(doc: SomeDoc): TableOfContentNode[] {
	switch (doc.kind) {
		case "class": {
			const output: TableOfContentNode[] = [
				{
					name: "Constructor",
					href: "#constructor",
				},
			];

			if (doc.methods) {
				output.push({
					name: "Methods",
					href: "#methods",
					children: doc.methods.map((method) => {
						return {
							name: method.name,
							href: `#${method.name}`,
						};
					}),
				});
			}

			if (doc.properties) {
				output.push({
					name: "Properties",
					href: "#properties",
					children: doc.properties.map((prop) => {
						return {
							name: prop.name,
							href: `#${prop.name}`,
						};
					}),
				});
			}

			if (doc.accessors) {
				output.push({
					name: "Properties",
					href: "#properties",
					children: doc.accessors.map((accessor) => {
						return {
							name: accessor.name,
							href: `#${accessor.name}`,
						};
					}),
				});
			}

			return output;
		}

		case "function": {
			if (!doc.signatures) {
				return [];
			}
			const numberOfSignatures = doc.signatures.length;
			return doc.signatures.map((signature, i) => {
				const link = "signature" + (numberOfSignatures > 1 ? `-${i + 1}` : "");
				const name = "Signature" + (numberOfSignatures > 1 ? ` #${i + 1}` : "");

				const children: TableOfContentNode[] = [];

				const exampleTag = signature.blockTags?.find(
					(tag) => tag.tag === "@example",
				);

				if (exampleTag) {
					children.push({
						name: "Example",
						href: `#example${numberOfSignatures > 1 ? `-${i + 1}` : ""}`,
					});
				}

				if (signature.parameters) {
					children.push(
						...signature.parameters?.map((param) => {
							return {
								name: param.name,
								href: `#${param.name}${
									numberOfSignatures > 1 ? `-${i + 1}` : ""
								}`,
							};
						}),
					);
				}

				if (signature.returns) {
					children?.push({
						name: "Returns",
						href: `#returns${numberOfSignatures > 1 ? `-${i + 1}` : ""}`,
					});
				}

				return {
					name: name,
					href: `#${link}`,
					children,
				};
			});
		}
	}

	return [];
}
