import { TypeDeclarationDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { FunctionTDoc } from "./Function";

export function TypeDeclarationTDoc(props: {
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
					{doc.summary && <TypedocSummary summary={doc.summary} />}
					<CodeBlock lang="ts" code={`type ${doc.name} = ${doc.type}`} />
				</>
			)}

			{doc.kind === "function" && (
				<FunctionTDoc
					doc={doc}
					level={props.level + 1}
					showHeading={props.showHeading}
				/>
			)}
		</>
	);
}
