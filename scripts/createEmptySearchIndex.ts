import { existsSync } from "fs";
import { writeFile } from "fs-extra";

// This is required to load the searchIndex.json on vercel server
// searchIndex.json needs to be exist in file system before we run `next build`

async function main() {
	if (!existsSync("./searchIndex.json")) {
		writeFile("./searchIndex.json", `[]`);
	}
}

main();
