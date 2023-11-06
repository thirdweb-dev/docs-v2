import { readFile } from "fs/promises";
import { outputFile } from "fs-extra";
import { getFilesRecursive } from "./getFilesRecursive";
import {
	parse,
	HTMLElement as X_HTMLElement,
	Node as X_Node,
	TextNode as X_TextNode,
	CommentNode as X_CommentNode,
} from "node-html-parser";
import { NEXT_OUTPUT_FOLDER, SERACH_CONTENT_JSON } from "./consts";
import { PageData, PageSectionData } from "../types";
import path from "path";

export async function extractSearchData() {
	const htmlFiles = getFilesRecursive(NEXT_OUTPUT_FOLDER, "html");

	const pages: PageData[] = [];

	await Promise.all(
		htmlFiles.map(async (filePath) => {
			const htmlContent = await readFile(filePath, "utf-8");
			const mainEl = parse(htmlContent, {
				comment: false,
				blockTextElements: {
					pre: false, // parse text inside <pre> elements instead of treating it as text
				},
			}).querySelector("main");

			if (!mainEl) {
				console.warn(
					`No <main> element found in ${filePath}, It won't be included in the search results.`,
				);

				return;
			}

			pages.push({
				href: filePath.replace(NEXT_OUTPUT_FOLDER, "").replace(".html", ""),
				title: mainEl.querySelector("h1")?.text || "",
				sections: getPageSections(mainEl),
			});
		}),
	);

	const outputFilePath = path.resolve(SERACH_CONTENT_JSON);
	console.log("Writing search output data to", outputFilePath);
	outputFile(outputFilePath, JSON.stringify(pages, null, 2));
}

function getPageSections(main: X_HTMLElement): PageSectionData[] {
	const sectionData: PageSectionData[] = [];

	const ignoreTags = new Set(["code", "nav"].map((t) => t.toUpperCase()));

	function collector(node: X_Node) {
		if (node instanceof X_CommentNode) {
			return;
		} else if (node instanceof X_HTMLElement) {
			if (ignoreTags.has(node.tagName)) {
				return;
			}

			// headings -> start new section
			if (node.tagName.startsWith("H") && node.tagName !== "H1") {
				sectionData.push({
					title: node.text,
					href: node.parentNode.querySelector("a")?.getAttribute("href") || "",
					content: "",
				});
			} else {
				for (const child of node.childNodes) {
					collector(child);
				}
			}
		} else if (node instanceof X_TextNode) {
			const lastSection = sectionData[sectionData.length - 1];
			if (lastSection) {
				lastSection.content += node.text.trim() + " ";
			} else {
				sectionData.push({
					content: node.text.trim() + " ",
					href: "",
				});
			}
		}
	}

	collector(main);

	sectionData.forEach((s) => {
		s.content = s.content.trim();
	});

	return sectionData.filter((s) => s.content && s.title);
}
