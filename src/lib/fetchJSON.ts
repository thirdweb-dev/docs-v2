import nodeFetch from "node-fetch";

const fetchCache = new Map<string, Promise<any>>();

export async function fetchJSON(url: string) {
	if (fetchCache.has(url)) {
		return fetchCache.get(url);
	}

	const fetchPromise = nodeFetch(url).then((res) => res.json());
	fetchCache.set(url, fetchPromise);

	return fetchPromise;
}
