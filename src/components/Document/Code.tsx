import "server-only";

// highlight.js
import highlight from "highlight.js";
import "highlight.js/styles/github-dark.css";
// prettier
import { format } from "prettier/standalone";
import * as parserBabel from "prettier/plugins/babel";
import * as estree from "prettier/plugins/estree";
// html-to-react
import { Parser, ProcessNodeDefinitions } from "html-to-react";
import { ChildNode } from "domhandler";
// others
import { cn } from "@/lib/utils";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { solidity } from "highlightjs-solidity";
import { CopyButton } from "../others/CopyButton";
import { ScrollShadow } from "../others/ScrollShadow/ScrollShadow";

const htmlToReactParser = Parser();
const processNodeDefinitions = ProcessNodeDefinitions();

fixBashHighlight();

const jsOrTsLangs = new Set([
	"js",
	"jsx",
	"ts",
	"tsx",
	"javascript",
	"typescript",
]);

highlight.registerLanguage("solidity", solidity);

export async function CodeBlock(props: {
	code: string;
	lang: string;
	tokenLinks?: Map<string, string>;
}) {
	let code = props.code;
	let lang = props.lang;
	const tokenLinks = props.tokenLinks;

	if (lang === "shell" || lang === "sh") {
		lang = "bash";
	}

	// format code
	if (jsOrTsLangs.has(lang)) {
		try {
			code = await format(code, {
				parser: "babel-ts",
				plugins: [parserBabel, estree],
				printWidth: 80,
			});
		} catch (e) {
			// ignore
		}
	}

	// highlight code
	const highlightedCode = highlight.highlight(code, {
		language: lang,
	}).value;

	let ReactElement: any;

	// wrap with links

	if (tokenLinks) {
		const processingInstructions = [
			{
				shouldProcessNode: function (node: ChildNode) {
					if (node.type === "text") return true;
				},
				processNode: function (node: Text) {
					const tokens = alphaSplit(node.data);
					const result = tokens.map((token, i) => {
						if (tokenLinks.has(token)) {
							const href = tokenLinks.get(token);

							return (
								<Link
									key={i}
									data-x={token}
									href={href || "#"}
									className="group/codelink relative py-0.5"
								>
									<span className="relative z-10 transition-colors duration-200 group-hover/codelink:text-b-900">
										{token}
									</span>
									<span
										className={cn(
											"absolute bottom-0 left-0 right-0 z-0 inline-block h-[3px] scale-105 translate-y-[2px]",
											"rounded-sm bg-current opacity-20",
											"transition-all duration-200 group-hover/codelink:opacity-100 group-hover/codelink:h-full group-hover/codelink:translate-y-0",
										)}
									/>
								</Link>
							);
						}

						return token;
					});

					return result;
				},
			},
			{
				// Anything else
				shouldProcessNode: function () {
					return true;
				},
				processNode: processNodeDefinitions.processDefaultNode,
			},
		];

		ReactElement = htmlToReactParser.parseWithInstructions(
			highlightedCode,
			() => true,
			processingInstructions,
		);
	}

	return (
		<div className="group/code relative mb-5">
			<code
				className="relative block rounded-md border bg-b-800 font-mono text-sm leading-7"
				lang={lang}
			>
				<ScrollShadow scrollableClassName="p-4" className="">
					<pre
						dangerouslySetInnerHTML={
							ReactElement ? undefined : { __html: highlightedCode }
						}
					>
						{ReactElement}
					</pre>
				</ScrollShadow>
			</code>

			<div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover/code:opacity-100">
				<CopyButton text={code} />
			</div>
		</div>
	);
}

export function InlineCode(props: { code: string; className?: string }) {
	return (
		<code
			className={cn(
				"max-h-20 rounded-md border bg-b-700 px-1.5 py-0.5 text-[0.875em]",
				props.className,
			)}
			style={{
				boxDecorationBreak: "clone",
				WebkitBoxDecorationBreak: "clone",
			}}
		>
			{props.code}
		</code>
	);
}

function fixBashHighlight() {
	const bash = highlight.getLanguage("bash");

	if (bash) {
		(bash.keywords as any).built_in = [
			...(bash.keywords as any).built_in,
			"yarn",
			"npm",
			"npx",
			"pnpm",
			"install",
			"add",
			"node",
			"ts-node",
			"bun",
			"thirdweb",
		];
	}
}

/**
 * Given a string with some alpha characters and some non-alpha characters mixed together,
 * split the string into an array of tokens
 * where each token is either a consecutive string of alpha characters or a string of non-alpha characters.
 *
 * @param str - The string to split
 * @returns An array of alpha and non-alpha tokens
 */
function alphaSplit(str: string) {
	const output: string[] = [];
	let collecting = "";
	let isCollectingVar = true;

	for (const char of str) {
		const isValidVar = /[a-zA-Z_0-9]/.test(char);

		// if mismatch between current char and current word type
		if ((!isValidVar && isCollectingVar) || (isValidVar && !isCollectingVar)) {
			output.push(collecting); // save currently collected word
			collecting = char; // start collecting new word
			isCollectingVar = !isCollectingVar; // toggle flag
			continue;
		} else {
			collecting += char; // keep collecting current word
		}
	}
	if (collecting) output.push(collecting);
	return output;
}
