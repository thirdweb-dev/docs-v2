import { AccessorDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";

export function AccessorTDoc(props: { doc: AccessorDoc; level: number }) {
	const { doc } = props;

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}
			{doc.summary && <TypedocSummary summary={doc.summary} />}

			<CodeBlock lang="ts" code={getAccessorSignatureCode(doc)} />

			{doc.returns?.summary && (
				<>
					<Heading id="returns" level={props.level + 1}>
						Returns
					</Heading>
					{doc.returns?.summary && (
						<TypedocSummary summary={doc.returns?.summary} />
					)}
				</>
			)}
		</>
	);
}

export function getAccessorSignatureCode(doc: AccessorDoc) {
	return `${doc.name}(): ${doc.returns?.type || "void"}`;
}
