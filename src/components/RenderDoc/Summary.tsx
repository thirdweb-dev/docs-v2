import { FunctionSignature } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { Paragraph } from "../Document/Paragraph";
import { DocLink } from "../Document/DocLink";
import { Lang } from "shiki";
import { UnorderedList } from "../Document/List";
import { Heading } from "../Document/Heading";

export function RenderSummary(props: {
	summary: NonNullable<FunctionSignature["summary"]>;
}) {
	return (
		<>
			{props.summary.map((s) => {
				switch (s.type) {
					case "code": {
						return <CodeBlock lang={s.lang as Lang} code={s.value} />;
					}

					case "html":
					case "inlineCode": {
						return <InlineCode code={s.value} />;
					}

					case "link": {
						const isUrlNum = s.url.match(/^[0-9]+$/);

						// TODO - link to doc
						return (
							<DocLink href={isUrlNum ? "" : s.url}>
								<RenderSummary summary={s.children} />
							</DocLink>
						);
					}

					case "paragraph": {
						return (
							<Paragraph>
								<RenderSummary summary={s.children} />
							</Paragraph>
						);
					}

					case "text": {
						return <span> {s.value}</span>;
					}

					case "list": {
						return (
							<UnorderedList>
								<RenderSummary summary={s.children} />
							</UnorderedList>
						);
					}

					case "listItem": {
						return (
							<li>
								<RenderSummary summary={s.children} />
							</li>
						);
					}

					case "heading": {
						return (
							<Heading level={s.depth} id="">
								<RenderSummary summary={s.children} />
							</Heading>
						);
					}

					case "strong":
					case "emphasis": {
						return (
							<em>
								<RenderSummary summary={s.children} />
							</em>
						);
					}

					case "thematicBreak": {
						return <hr />;
					}

					default: {
						// when this happens, we need to add a new case to the switch
						console.warn(`Unknown summary type: ${s.type}`);
					}
				}
			})}
		</>
	);
}
