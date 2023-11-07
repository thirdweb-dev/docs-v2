import type { NextApiRequest, NextApiResponse } from "next";
import { search } from "@/app/api/search/searching/search";
// import path from "path";

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

	// const rootDir = path.resolve(process.cwd());
	// console.log("rootDir on search api is", rootDir);
	const results = await search(query);
	return res.json(results);
}
