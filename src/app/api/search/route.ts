import { NextResponse, NextRequest } from "next/server";
import { SearchResult } from "@/app/api/search/types";
import { search } from "./searching/search";
import { NEXT_OUTPUT_FOLDER } from "./extraction/consts";

export async function GET(
	request: NextRequest,
): Promise<NextResponse<SearchResult>> {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("q") || "";

	if (!query)
		return NextResponse.json({
			meta: {
				cwd: process.cwd(),
				nextDotRoot: NEXT_OUTPUT_FOLDER,
				websiteData: [1, 2, 3],
			},
			results: [],
		});

	const results = await search(query);
	return NextResponse.json(results);
}
