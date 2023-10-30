import { EnumDoc, InterfaceDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";
import { RenderTypeDeclaration } from "./RenderTypeDeclaration";

export function RenderEnumDoc(props: { doc: EnumDoc; level: number }) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLink href={doc.source} />}
			{doc.summary && <RenderSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getEnumCode(doc)} />

			{doc.members?.map((member, i) => {
				return (
					<div key={member.name}>
						<Heading level={props.level + 1} id={member.name}>
							{member.name}
						</Heading>
						{member.summary && <RenderSummary summary={member.summary} />}
						<CodeBlock
							lang="ts"
							code={`${doc.name}.${member.name}: ${member.value}`}
						/>
					</div>
				);
			})}
		</>
	);
}

export function getEnumCode(doc: EnumDoc) {
	return `enum ${doc.name} {
    ${doc.members?.map((member) => member.name).join(",\n")}}`;
}
