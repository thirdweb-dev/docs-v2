import { outputFile } from "fs-extra";
import { extractSearchData } from "../src/app/api/search/extraction";

async function main() {
	const rootDir = process.cwd();
	console.log(`cwd is`, rootDir);
	const websiteData = await extractSearchData(rootDir);
	const searchDataPath = `${rootDir}/.data/search-content.json`;
	console.log(`Writing search data at ${searchDataPath}`);
	await outputFile(searchDataPath, JSON.stringify(websiteData, null, 2));
}

main();
