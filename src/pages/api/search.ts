import type { NextApiRequest, NextApiResponse } from "next";
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

	const results = await search(query);
	return res.json(results);
}
