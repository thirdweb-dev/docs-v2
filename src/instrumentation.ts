export async function register() {
	console.log("register api cwd", process.cwd());

	if (process.env.NEXT_RUNTIME === "nodejs") {
		const { getSearchIndexes } = await import(
			"./app/api/search/indexing/createIndex"
		);

		await getSearchIndexes();
	}
}
