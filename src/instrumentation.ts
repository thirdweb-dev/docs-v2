export async function register() {
	if (process.env.NEXT_RUNTIME === "nodejs") {
		const { getSearchIndexes } = await import(
			"./app/api/search/indexing/createIndex"
		);

		await getSearchIndexes();
	}
}
