import path from "path";

export const NEXT_OUTPUT_FOLDER = path.join(process.cwd(), ".next/server/app");

export const SERACH_CONTENT_JSON = path.join(
	process.cwd(),
	".data/search-content.json",
);

console.log({
	NEXT_OUTPUT_FOLDER,
	SERACH_CONTENT_JSON,
});
