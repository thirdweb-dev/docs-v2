import { existsSync } from "fs";
import { writeFile } from "fs-extra";

async function main() {
	if (!existsSync("./searchIndex.json")) {
		writeFile("./searchIndex.json", `[]`);
	}
}

main();
