import { gunzip } from "node:zlib";
import { promisify } from "node:util";

const fetchCache = new Map<string, Promise<any>>();

export async function fetchJSON(url: string) {
	if (fetchCache.has(url)) {
		return fetchCache.get(url);
	}

	const fetchPromise = new Promise(async (resolve, reject) => {
		const response = await fetch(url, { cache: "no-cache" });
		if (!response.ok) {
			reject(response);
		}

		if (url.endsWith(".json")) {
			try {
				resolve(await response.json());
			} catch (e) {
				reject(e);
			}
		} else if (url.endsWith(".json.gz")) {
			try {
				const arrayBuffer = await response.arrayBuffer();
				const json = await promisify(gunzip)(arrayBuffer);
				resolve(JSON.parse(json.toString()));
			} catch (e) {
				reject(e);
			}
		}
		reject(new Error(`Unknown file type for ${url}`));
	});
	fetchCache.set(url, fetchPromise);

	return fetchPromise;
}
