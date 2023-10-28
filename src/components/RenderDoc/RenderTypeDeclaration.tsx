import { TypeDeclarationDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";

export function RenderTypeDeclaration(props: {
	doc: TypeDeclarationDoc;
	level: number;
	hideTitle?: boolean;
}) {
	const { doc } = props;

	return (
		<>
			{!props.hideTitle && (
				<Heading level={props.level} id={doc.name}>
					{doc.name}
				</Heading>
			)}
			{doc.summary && <RenderSummary summary={doc.summary} />}
			<CodeBlock lang="ts" code={`type ${doc.name} = ${doc.type}`} />
		</>
	);
}
