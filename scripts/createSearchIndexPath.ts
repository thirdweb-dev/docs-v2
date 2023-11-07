import { writeFile } from "fs-extra";

async function main() {
	const searchDataPath = `${process.cwd()}/.data/search-content.json`;
	writeFile(
		"./searchIndexPath.ts",
		`export const searchIndexPath = "${searchDataPath}";`,
	);
}

main();
