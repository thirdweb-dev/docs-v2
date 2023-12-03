import { AccessorDoc, TypeRef } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { getTags } from "./utils/getTags";
import { DeprecatedCalloutTDoc } from "./Deprecated";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { Callout } from "@/components/Document";
import { getTokenLinks } from "@/contexts/linkMap";

export function AccessorTDoc(props: { doc: AccessorDoc; level: number }) {
	const { doc } = props;
	const { deprecatedTag, exampleTag, remarksTag, seeTag } = getTags(
		doc.blockTags,
	);
	const subLevel = props.level + 1;

	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	const { code: signatureCode, references } = getAccessorSignatureCode(doc);

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

			<CodeBlock
				lang="ts"
				code={signatureCode}
				tokenLinks={references ? getTokenLinks(references) : undefined}
			/>

			{exampleTag?.summary && (
				<>
					<Heading level={subLevel} id={slugger.slug("example")}>
						Example
					</Heading>
					<TypedocSummary summary={exampleTag.summary} />
				</>
			)}

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

export function getAccessorSignatureCode(doc: AccessorDoc): TypeRef {
	return {
		code: `${doc.name}(): ${doc.returns?.type?.code || "void"}`,
		references: doc.returns?.type?.references,
	};
}
