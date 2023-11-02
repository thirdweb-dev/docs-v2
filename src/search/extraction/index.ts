import { readFile, writeFile } from "fs/promises";
import { getFilesRecursive } from "./getFilesRecursive";
import { parse, HTMLElement as X_HTMLElement } from "node-html-parser";
import { NEXT_OUTPUT_FOLDER, SERACH_CONTENT_JSON } from "./consts";
import { PageData, PageSectionData } from "../types";

(async function extractContent() {
	const htmlFiles = getFilesRecursive(NEXT_OUTPUT_FOLDER, "html");

	const pages: PageData[] = [];

	await Promise.all(
		htmlFiles.map(async (filePath) => {
			const htmlContent = await readFile(filePath, "utf-8");
			const mainEl = parse(htmlContent).querySelector("main");

			if (!mainEl) {
				console.warn(
					'No "main" element found in ' + filePath,
					"It won't be included in the search results.",
				);

				return;
			}

			pages.push({
				href: filePath.replace(NEXT_OUTPUT_FOLDER, "").replace(".html", ""),
				title: mainEl.querySelector("h1")?.text,
				sections: getPageSections(mainEl),
			});
		}),
	);

	writeFile(SERACH_CONTENT_JSON, JSON.stringify(pages, null, 2));
})();

function getPageSections(main: X_HTMLElement): PageSectionData[] {
	const sectionData: PageSectionData[] = [];
	const contentElements = main.querySelectorAll("h2, h3, h4, p, li");

	contentElements.forEach((el) => {
		const isHeading = el.tagName.startsWith("H");

		if (isHeading) {
			sectionData.push({
				title: el.text,
				href: el.parentNode.querySelector("a")?.getAttribute("href"),
				content: "",
			});
		} else {
			const lastSection = sectionData[sectionData.length - 1];
			if (lastSection) {
				lastSection.content += el.textContent + " ";
			} else {
				sectionData.push({
					content: el.textContent + " ",
				});
			}
		}
	});

	return sectionData.filter((s) => s.content.trim().length > 3);
}
