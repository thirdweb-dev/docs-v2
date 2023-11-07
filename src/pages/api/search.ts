import type { NextApiRequest, NextApiResponse } from "next";
import { SearchResult } from "@/app/api/search/types";
import path from "path";
import { search } from "@/app/api/search/searching/search";

export default async function handler(
	request: NextApiRequest,
	res: NextApiResponse,
) {
	const searchParams = request.query;
	const query = (searchParams.q || "") as string;

	if (!query)
		return res.json({
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
	return res.json(results);
}
