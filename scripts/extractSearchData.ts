import { outputFile } from "fs-extra";
import { extractSearchData } from "../src/app/api/search/extraction";

async function main() {
	const websiteData = await extractSearchData();
	const searchDataPath = `${process.cwd()}/.data/search-content.json`;
	console.log({ __dirname });
	console.log(`Writing search data at ${searchDataPath}`);
	await outputFile(searchDataPath, JSON.stringify(websiteData, null, 2));
}

main();
