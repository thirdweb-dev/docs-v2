import { TypeDeclarationDoc, VariableDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";
import { RenderTypeDeclaration } from "./RenderTypeDeclaration";
import { RenderFunctionDoc } from "./RenderFunctionDoc";
import { Details } from "../Document/Details";

export function RenderVariableDoc(props: {
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

			{doc.source && <SourceLink href={doc.source} />}

			{doc.summary && <RenderSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getVariableSignatureCode(doc)} />

			{doc.typeDeclaration?.map((declaration, i) => {
				return (
					<Details key={i} summary={declaration.name} id={declaration.name}>
						{"kind" in declaration && declaration.kind === "function" ? (
							<RenderFunctionDoc
								doc={declaration}
								level={props.level + 1}
								showHeading={false}
							/>
						) : (
							<RenderTypeDeclaration
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
