import { readFile } from "fs/promises";
import FlexSearch from "flexsearch";
import { PageData, PageIndex } from "../types";
import { SERACH_CONTENT_JSON } from "../extraction/consts";

export async function createSearchIndexes() {
	const content = await readFile(SERACH_CONTENT_JSON, "utf8");
	const websiteData = JSON.parse(content) as PageData[];

	const pageIndex: PageIndex = new FlexSearch.Document({
		cache: 100,
		tokenize: "full",
		document: {
			// unique id of the page is "id" key
			id: "id",
			// array of fields to index or just a single field
			// here we only want to do indexing on "content" key
			index: "content",
			store: ["title", "content"],
		},
		context: {
			resolution: 9,
			depth: 2,
			bidirectional: true,
		},
	});

	websiteData.forEach((pageData, i) => {
		const content =
			pageData.sections
				?.map(
					(section) => `

      ${section.title} ${section.content}`,
				)
				.join(" ") || "";

		pageIndex.add({
			id: i,
			content,
			title: pageData.title || "",
		});
	});

	return { pageIndex, websiteData };
}
