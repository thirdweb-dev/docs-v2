import highlight from "highlight.js";
import "highlight.js/styles/github-dark.css";

import { format } from "prettier/standalone";
import * as parserBabel from "prettier/plugins/babel";
import * as estree from "prettier/plugins/estree";
import { cn } from "@/lib/utils";

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
	];
}

export async function CodeBlock(props: { code: string; lang: string }) {
	let code = props.code;

	if (
		props.lang === "ts" ||
		props.lang === "js" ||
		props.lang === "jsx" ||
		props.lang === "tsx" ||
		props.lang === "javascript" ||
		props.lang === "typescript"
	) {
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

	const highlightedCode = highlight.highlight(code, {
		language: props.lang,
	}).value;

	return (
		<code className="my-3 block font-mono text-sm leading-6" lang={props.lang}>
			<pre
				className="styled-scrollbar max-h-[500px] overflow-auto rounded-md border bg-b-800 p-4 selection:bg-b-700"
				dangerouslySetInnerHTML={{
					__html: highlightedCode,
				}}
			></pre>
		</code>
	);
}

export function InlineCode(props: { code: string; className?: string }) {
	return (
		<code
			className={cn(
				"max-h-20 rounded-md border bg-b-800 px-1.5 py-0.5 text-sm text-f-100",
				props.className,
			)}
		>
			{props.code}
		</code>
	);
}
