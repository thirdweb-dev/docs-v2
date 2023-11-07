import { NextResponse, NextRequest } from "next/server";
import { SearchResult } from "@/app/api/search/types";
import { search } from "./searching/search";
import path from "path";

export async function GET(
	request: NextRequest,
): Promise<NextResponse<SearchResult>> {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("q") || "";

	if (!query)
		return NextResponse.json({
			results: [],
		});

	console.log("cwd is", process.cwd());

	const nextRootDir = __dirname.split(".next")[0];

	console.log({ nextRootDir });

	const searchContentPath = path.resolve(
		process.cwd(),
		".data/search-content.json",
	);
	console.log({ searchContentPath });
	const results = await search(query, searchContentPath);
	return NextResponse.json(results);
}
