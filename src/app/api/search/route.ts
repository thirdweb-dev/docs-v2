import { NextResponse, NextRequest } from "next/server";
import { SearchResult } from "@/app/api/search/types";
import { search } from "./searching/search";

export async function GET(
	request: NextRequest,
): Promise<NextResponse<SearchResult[]>> {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("q") || "";

	if (!query) return NextResponse.json([]);

	const results = await search(query);
	return NextResponse.json(results);
}
