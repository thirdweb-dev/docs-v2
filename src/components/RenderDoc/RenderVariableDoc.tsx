import { TypeDeclarationDoc, VariableDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";
import { RenderTypeDeclaration } from "./RenderTypeDeclaration";
import { RenderFunctionDoc } from "./RenderFunctionDoc";

export function RenderVariableDoc(props: { doc: VariableDoc; level: number }) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLink href={doc.source} />}

			{doc.summary && <RenderSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getVariableSignatureCode(doc)} />

			{doc.typeDeclaration?.map((declaration, i) => {
				return (
					<div key={i}>
						{"kind" in declaration && declaration.kind === "function" ? (
							<RenderFunctionDoc doc={declaration} level={props.level + 1} />
						) : (
							<RenderTypeDeclaration
								doc={declaration as TypeDeclarationDoc}
								level={props.level + 1}
							/>
						)}
					</div>
				);
			})}
		</>
	);
}

export function getVariableSignatureCode(doc: VariableDoc) {
	return `let ${doc.name}: ${doc.type}`;
}
