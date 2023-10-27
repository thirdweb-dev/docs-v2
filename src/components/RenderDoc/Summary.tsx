import { FunctionSignature } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { Paragraph } from "../Document/Paragraph";
import { DocLink } from "../Document/DocLink";
import { Lang } from "shiki";
import { UnorderedList } from "../Document/List";
import { Heading } from "../Document/Heading";

export function Summary(props: {
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
								<Summary summary={s.children} />
							</DocLink>
						);
					}

					case "paragraph": {
						return (
							<Paragraph>
								<Summary summary={s.children} />
							</Paragraph>
						);
					}

					case "text": {
						return <span> {s.value}</span>;
					}

					case "list": {
						return (
							<UnorderedList>
								<Summary summary={s.children} />
							</UnorderedList>
						);
					}

					case "listItem": {
						return (
							<li>
								<Summary summary={s.children} />
							</li>
						);
					}

					case "heading": {
						const level = `h${s.depth}` as "h1" | "h2" | "h3" | "h4" | "h5";
						return (
							<Heading as={level} id="">
								<Summary summary={s.children} />
							</Heading>
						);
					}

					case "strong":
					case "emphasis": {
						return (
							<em>
								<Summary summary={s.children} />
							</em>
						);
					}

					default: {
						// when this happens, we need to add a new case to the switch
						console.log(props.summary);
						throw new Error(`Unknown summary type: ${s.type}`);
					}
				}
			})}
		</>
	);
}
