import { InterfaceDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { TypeDeclarationTDoc } from "./TypeDeclaration";
import { Details } from "../../../../components/Document/Details";

export function TypeTDoc(props: { doc: InterfaceDoc; level: number }) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}
			{doc.summary && <TypedocSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getInterfaceCode(doc)} />

			{doc.typeDeclaration?.map((declaration, i) => {
				return (
					<Details key={i} summary={declaration.name} id={declaration.name}>
						<TypeDeclarationTDoc
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
