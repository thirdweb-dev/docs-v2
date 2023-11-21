import { BlockTag } from "typedoc-better-json";

export function getTags(blockTags?: BlockTag[]) {
	const exampleTag = blockTags?.find((tag) => tag.tag === "@example");
	const deprecatedTag = blockTags?.find((tag) => tag.tag === "@deprecated");
	const remarksTag = blockTags?.find((t) => t.tag === "@remarks");
	const seeTag = blockTags?.find((t) => t.tag === "@see");

	return {
		exampleTag,
		deprecatedTag,
		remarksTag,
		seeTag,
	};
}
