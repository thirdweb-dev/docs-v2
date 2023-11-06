import { readFile } from "fs/promises";
import FlexSearch from "flexsearch";
import { PageData, PageTitleIndex, SectionIndex } from "../types";
import { SERACH_CONTENT_JSON } from "../extraction/consts";
import { existsSync } from "fs";
import { extractSearchData } from "../extraction";

export type Indexes = {
	sectionIndex: SectionIndex;
	websiteData: PageData[];
	pageTitleIndex: PageTitleIndex;
};

async function createSearchIndexes(): Promise<Indexes> {
	console.debug("CREATING SEARCH INDEX...");

	// if search content does not exist - create it
	if (!existsSync(SERACH_CONTENT_JSON)) {
		await extractSearchData();
	}

	const content = await readFile(SERACH_CONTENT_JSON, "utf8");
	const websiteData = JSON.parse(content) as PageData[];

	// create indexes
	const pageTitleIndex: PageTitleIndex = new FlexSearch.Document({
		cache: 100,
		tokenize: "full",
		document: {
			id: "id",
			index: ["title", "id"],
		},
	});

	const sectionIndex: SectionIndex = new FlexSearch.Document({
		cache: 100,
		preset: "default",
		tokenize: "full",
		document: {
			id: "id",
			index: ["title", "content"],
			store: ["title", "content", "pageId", "href", "id"],
		},
	});

	// add data to indexes
	let sectionId = 0;
	for (let pageId = 0; pageId < websiteData.length; pageId++) {
		const pageData = websiteData[pageId]!;

		pageTitleIndex.add({
			id: pageId,
			title: pageData.title,
		});

		pageData.sections?.forEach((section) => {
			sectionIndex.add({
				id: sectionId++,
				title: section.title || "",
				content: section.content,
				href: section.href || "",
				pageId: pageId,
			});
		});
	}

	console.debug("SEARCH INDEX CREATED");

	return {
		sectionIndex,
		pageTitleIndex,
		websiteData,
	};
}

let indexes: Indexes;
let indexesPromise: Promise<Indexes>;

export async function getSearchIndexes() {
	// if index is not yet created
	if (!indexes) {
		// if index is being created
		if (indexesPromise) {
			// wait for it to be created
			return await indexesPromise;
		}

		// create index, and save the promise so that other requests can wait for the same
		indexesPromise = createSearchIndexes();
		indexes = await indexesPromise;
		return indexes;
	}

	return indexes;
}
