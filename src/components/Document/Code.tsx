import shiki, { Lang } from "shiki";

// server-side code highlighting

export async function CodeBlock(props: {
	code: string;
	lang: Lang;
	showLineNumbers?: boolean;
}) {
	const highlighter = await shiki.getHighlighter({
		theme: "github-dark-dimmed",
	});

	const html = await highlighter.codeToHtml(props.code, {
		lang: props.lang,
	});

	return (
		<div
			className={`codeBlockContainer mb-5 block font-mono text-sm leading-6`}
			dangerouslySetInnerHTML={{
				__html: html,
			}}
		></div>
	);
}

export function InlineCode(props: { code: string }) {
	return (
		<code className="rounded-md border bg-b-800 px-1.5 py-0.5 text-sm text-f-100">
			{props.code}
		</code>
	);
}
