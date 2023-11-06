export async function register() {
	console.log("register api cwd", process.cwd());

	if (process.env.NEXT_RUNTIME === "nodejs") {
		if (process.env.NODE_ENV === "production") {
			const { extractSearchData } = await import("./app/api/search/extraction");
			await extractSearchData();
		}

		const { getSearchIndexes } = await import(
			"./app/api/search/indexing/createIndex"
		);

		await getSearchIndexes();
	}
}
