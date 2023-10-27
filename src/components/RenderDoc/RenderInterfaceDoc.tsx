import { InterfaceDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";
import { RenderTypeDeclaration } from "./RenderTypeDeclaration";

export function RenderInterfaceDoc(props: {
	doc: InterfaceDoc;
	level: number;
}) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLink href={doc.source} />}
			{doc.summary && <RenderSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getInterfaceCode(doc)} />

			{doc.typeDeclaration?.map((declaration, i) => {
				return (
					<RenderTypeDeclaration
						doc={declaration}
						level={props.level + 1}
						key={i}
					/>
				);
			})}
		</>
	);
}

export function getInterfaceCode(doc: InterfaceDoc) {
	if (!doc.type) return doc.name;
	return `type ${doc.name} = ${doc.type}`;
}
