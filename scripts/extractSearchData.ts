import { outputFile } from "fs-extra";
import { extractSearchData } from "../src/app/api/search/extraction";
import { readFile, writeFile } from "fs/promises";

async function main() {
	const rootDir = process.cwd();
	console.log(`cwd is`, rootDir);
	const websiteData = await extractSearchData(rootDir);
	const searchDataPath = `${rootDir}/.data/search-content.json`;
	console.log(`Writing search data at ${searchDataPath}`);
	await outputFile(searchDataPath, JSON.stringify(websiteData, null, 2));

	// read searchDataPath.ts
	const searchIndexPathFileContent = await readFile(
		"./searchIndexPath.ts",
		"utf-8",
	);

	const lines = searchIndexPathFileContent.split("\n");
	lines[0] = `export const searchIndexPath = "${searchDataPath}";`;
	writeFile("./searchIndexPath.ts", lines.join("\n"));
}

main();
