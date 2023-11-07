import { extractSearchData } from "../src/app/api/search/extraction";
import { writeFile } from "fs/promises";

async function main() {
	const rootDir = process.cwd();
	const websiteData = await extractSearchData(rootDir);
	writeFile("./searchIndex.json", JSON.stringify(websiteData, null, 2));
}

main();
