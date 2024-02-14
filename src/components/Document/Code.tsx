import "server-only";

import { BuiltinLanguage, codeToTokens, SpecialLanguage } from "shiki";
// prettier
import { format } from "prettier/standalone";
import * as parserBabel from "prettier/plugins/babel";
import * as estree from "prettier/plugins/estree";
// others
import { cn } from "@/lib/utils";
import Link from "next/link";

import { CopyButton } from "../others/CopyButton";
import { ScrollShadow } from "../others/ScrollShadow/ScrollShadow";

const jsOrTsLangs = new Set([
	"js",
	"jsx",
	"ts",
	"tsx",
	"javascript",
	"typescript",
]);

export async function CodeBlock(props: {
	code: string;
	lang: BuiltinLanguage | SpecialLanguage;
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

	return (
		<div className="group/code relative mb-5">
			<div
				className="relative block rounded-md border bg-code-bg font-mono text-sm leading-7"
				lang={lang}
			>
				<ScrollShadow scrollableClassName="p-4" className="">
					<RenderCode code={code} lang={lang} tokenLinks={tokenLinks} />
				</ScrollShadow>
			</div>

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

async function RenderCode(props: {
	code: string;
	lang: BuiltinLanguage | SpecialLanguage;
	tokenLinks?: Map<string, string>;
}) {
	const { tokens } = await codeToTokens(props.code, {
		theme: "github-dark",
		lang: props.lang,
	});

	return (
		<code>
			<pre>
				{tokens.map((line, i) => {
					return (
						<div key={i}>
							{line.map((token, i) => {
								const href =
									props.tokenLinks && props.tokenLinks.has(token.content)
										? props.tokenLinks.get(token.content)
										: undefined;

								if (href) {
									return (
										<Link
											key={i}
											href={href || "#"}
											className="group/codelink relative py-0.5"
											style={{
												color: token.color,
											}}
										>
											{/* Token */}
											<span className="relative z-10 transition-colors duration-200 group-hover/codelink:text-b-900">
												{token.content}
											</span>
											{/* Line */}
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

								return (
									<span
										key={i}
										style={{
											color: token.color,
										}}
									>
										{token.content}
									</span>
								);
							})}
						</div>
					);
				})}
			</pre>
		</code>
	);
}
