import { getSearchIndexes } from "../indexing/createIndex";
import { SearchResult, SearchResultItem, SearchResultSection } from "../types";

const maxResults = 50;

export async function search(query: string): Promise<SearchResult> {
	const { pageTitleIndex, sectionIndex, websiteData } =
		await getSearchIndexes();

	const titleMatches = pageTitleIndex.search(query, maxResults, {
		index: "title",
	});
	const results: SearchResultItem[] = [];

	const pageIdToResultMap = new Map<number, SearchResultItem>();
	const sectionIdsAddedInResult = new Set<number>();

	// search query in page titles - high bias, so added first in results array
	(titleMatches[0]?.result as number[] | undefined)?.forEach((id) => {
		const result: SearchResultItem = {
			pageHref: websiteData[id]!.href,
			pageTitle: websiteData[id]!.title,
		};
		results.push(result);
		pageIdToResultMap.set(id, result);
	});

	if (results.length >= maxResults) {
		return {
			results: results,
		};
	}

	function addSectionResult(doc: {
		id: number;
		title: string;
		content: string;
		pageId: number;
		href: string;
	}) {
		// if section is already added in results, skip
		if (sectionIdsAddedInResult.has(doc.id)) {
			return;
		}

		sectionIdsAddedInResult.add(doc.id);

		// create section result object
		const sectionResult: SearchResultSection = {
			content: doc.content,
			href: doc.href,
			title: doc.title,
		};

		// if page it is in is already added in results - add section to it
		// else create new page result object and add section to it
		const pageResult = pageIdToResultMap.get(doc.pageId);

		if (pageResult) {
			if (pageResult.sections) {
				pageResult.sections.push(sectionResult);
			} else {
				pageResult.sections = [sectionResult];
			}
		} else {
			const pageData = websiteData[doc.pageId]!;
			const pageResult: SearchResultItem = {
				pageHref: pageData.href,
				pageTitle: pageData.title,
				sections: [sectionResult],
			};

			results.push(pageResult);
			pageIdToResultMap.set(doc.pageId, pageResult);
		}
	}

	// search query in section titles, second highest bias - added second in results array
	const sectionTitleMatches = sectionIndex.search(
		query,
		maxResults - results.length,
		{
			index: "title",
			enrich: true,
		},
	);

	sectionTitleMatches[0]?.result.forEach((result) => {
		addSectionResult(result.doc);
	});

	const sectionContentMatches = sectionIndex.search<true>(query, 100, {
		index: "content",
		enrich: true,
		suggest: true,
	});

	sectionContentMatches[0]?.result.forEach((result) => {
		addSectionResult(result.doc);
	});

	// sort
	const sortedResults = results.sort((a, b) => {
		// if it's pageTitle is exact match, it should be first
		if (a.pageTitle === query) {
			return -1;
		}

		if (b.pageTitle === query) {
			return 1;
		}

		// page with more sections should be first
		const aSections = a.sections?.length || 0;
		const bSections = b.sections?.length || 0;

		if (aSections === bSections) {
			return a.pageTitle.localeCompare(b.pageTitle);
		}

		return bSections - aSections;
	});

	return {
		results: sortedResults,
	};
}
