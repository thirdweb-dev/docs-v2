import { NextResponse, NextRequest } from "next/server";
import { createSearchIndexes } from "@/search/indexing/createIndex";
import { PageData, PageIndex } from "@/search/types";

let indexes: {
	pageIndex: PageIndex;
	websiteData: PageData[];
};

const showTopPages = 5;

export async function GET(request: NextRequest) {
	if (!indexes) {
		indexes = await createSearchIndexes();
	}

	// get search parameters
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("q") || "";

	if (!query) return NextResponse.json({ data: [] });

	// show top 5 pages
	const results =
		indexes.pageIndex.search<true>(query, showTopPages, {
			enrich: true,
			suggest: true,
			limit: 50,
		})[0]?.result || [];

	const data = results.map((result) => {
		return {
			title: result.doc.title,
			href: indexes.websiteData[result.doc.id]?.href,
			content: result.doc.content,
		};
	});

	return NextResponse.json({ data });
}
