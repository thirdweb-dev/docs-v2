import shiki, { Lang } from "shiki";
import { format } from "prettier/standalone";
import * as parserBabel from "prettier/plugins/babel";
import * as estree from "prettier/plugins/estree";
import { cn } from "@/lib/utils";

export async function CodeBlock(props: { code: string; lang: Lang }) {
	const highlighter = await shiki.getHighlighter({
		theme: "material-theme-darker",
	});

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

	const codeHtml = highlighter.codeToHtml(code, {
		lang: props.lang,
	});

	return (
		<div
			className={`codeBlockContainer my-3 block font-mono text-sm leading-6`}
			dangerouslySetInnerHTML={{
				__html: codeHtml,
			}}
		></div>
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
