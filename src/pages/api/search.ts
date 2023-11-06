import type { NextApiRequest, NextApiResponse } from "next";
import { search } from "@/app/api/search/searching/search";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const searchParams = req.query as { q: string };
	const query = searchParams.q;

	if (!query) return res.json([]);

	const results = await search(query);
	return res.status(200).json(results);
}
