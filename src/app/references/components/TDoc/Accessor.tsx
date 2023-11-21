import { AccessorDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { getTags } from "./utils/getTags";
import { DeprecatedCalloutTDoc } from "./Deprecated";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { Callout } from "@/components/Document";

export function AccessorTDoc(props: { doc: AccessorDoc; level: number }) {
	const { doc } = props;
	const { deprecatedTag, exampleTag, remarksTag, seeTag } = getTags(
		doc.blockTags,
	);
	const subLevel = props.level + 1;

	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}

			{deprecatedTag && <DeprecatedCalloutTDoc tag={deprecatedTag} />}
			{doc.summary && <TypedocSummary summary={doc.summary} />}
			{remarksTag?.summary && <TypedocSummary summary={remarksTag.summary} />}

			{seeTag?.summary && (
				<Callout variant="info">
					<TypedocSummary summary={seeTag.summary} />
				</Callout>
			)}

			<CodeBlock lang="ts" code={getAccessorSignatureCode(doc)} />

			{exampleTag?.summary && (
				<>
					<br />
					<Heading level={subLevel} id={slugger.slug("example")}>
						Example
					</Heading>
					<TypedocSummary summary={exampleTag.summary} />
				</>
			)}

			{doc.returns?.summary && (
				<>
					<br />
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
