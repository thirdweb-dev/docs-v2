import { EnumDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";

export function EnumTDoc(props: { doc: EnumDoc; level: number }) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}
			{doc.summary && <TypedocSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getEnumCode(doc)} />

			{doc.members?.map((member) => {
				return (
					<div key={member.name}>
						<Heading level={props.level + 1} id={member.name}>
							{member.name}
						</Heading>
						{member.summary && <TypedocSummary summary={member.summary} />}
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
