import { AccessorDoc } from "typedoc-better-json";
import { CodeBlock } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";

export function RenderAccessorDoc(props: { doc: AccessorDoc; level: number }) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLink href={doc.source} />}
			{doc.summary && <RenderSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getAccessorSignatureCode(doc)} />

			{doc.returns?.summary && (
				<>
					<Heading id="returns" level={props.level + 1}>
						Returns
					</Heading>
					{doc.returns?.summary && (
						<RenderSummary summary={doc.returns?.summary} />
					)}
				</>
			)}
		</>
	);
}

export function getAccessorSignatureCode(doc: AccessorDoc) {
	return `${doc.name}(): ${doc.returns?.type || "void"}`;
}
