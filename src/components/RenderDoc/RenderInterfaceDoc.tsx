import { InterfaceDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";
import { RenderTypeDeclaration } from "./RenderTypeDeclaration";
import { Details } from "../Document/Details";

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
					<Details key={i} summary={declaration.name} id={declaration.name}>
						<RenderTypeDeclaration
							showHeading={false}
							doc={declaration}
							level={props.level + 1}
							key={i}
						/>
					</Details>
				);
			})}
		</>
	);
}

export function getInterfaceCode(doc: InterfaceDoc) {
	if (!doc.type) return doc.name;
	return `type ${doc.name} = ${doc.type}`;
}
