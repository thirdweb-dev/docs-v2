import { TypeDeclarationDoc } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { RenderFunctionDoc } from "./RenderFunctionDoc";

export function RenderTypeDeclaration(props: {
	doc: TypeDeclarationDoc;
	level: number;
	showHeading?: boolean;
}) {
	const { doc } = props;

	return (
		<>
			{doc.kind === "subtype" && (
				<>
					{props.showHeading !== false && (
						<Heading level={props.level} id={doc.name}>
							{doc.name}
						</Heading>
					)}
					{doc.summary && <RenderSummary summary={doc.summary} />}
					<CodeBlock lang="ts" code={`type ${doc.name} = ${doc.type}`} />
				</>
			)}

			{doc.kind === "function" && (
				<RenderFunctionDoc
					doc={doc}
					level={props.level + 1}
					showHeading={props.showHeading}
				/>
			)}
		</>
	);
}
