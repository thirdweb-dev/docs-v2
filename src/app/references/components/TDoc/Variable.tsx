import { TypeDeclarationDoc, VariableDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { TypeDeclarationTDoc } from "./TypeDeclaration";
import { FunctionTDoc } from "./Function";
import { Details } from "../../../../components/Document/Details";

export function VariableTDoc(props: {
	doc: VariableDoc;
	level: number;
	showHeading?: boolean;
}) {
	const { doc } = props;

	return (
		<>
			{props.showHeading !== false && (
				<Heading level={props.level} id={doc.name}>
					{doc.name}
				</Heading>
			)}

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}

			{doc.summary && <TypedocSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getVariableSignatureCode(doc)} />

			{doc.typeDeclaration?.map((declaration, i) => {
				return (
					<Details key={i} summary={declaration.name} id={declaration.name}>
						{"kind" in declaration && declaration.kind === "function" ? (
							<FunctionTDoc
								doc={declaration}
								level={props.level + 1}
								showHeading={false}
							/>
						) : (
							<TypeDeclarationTDoc
								doc={declaration as TypeDeclarationDoc}
								level={props.level + 1}
								showHeading={false}
							/>
						)}
					</Details>
				);
			})}
		</>
	);
}

export function getVariableSignatureCode(doc: VariableDoc) {
	return `let ${doc.name}: ${doc.type}`;
}
