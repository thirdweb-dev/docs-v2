import { EnumDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { getTags } from "./utils/getTags";
import { DeprecatedCalloutTDoc } from "./Deprecated";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { Callout } from "@/components/Document";

export function EnumTDoc(props: { doc: EnumDoc; level: number }) {
	const { doc } = props;
	const { exampleTag, deprecatedTag, remarksTag, seeTag } = getTags(
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

			<CodeBlock lang="ts" code={getEnumCode(doc)} />

			{exampleTag?.summary && (
				<>
					<br />
					<Heading level={subLevel} id={slugger.slug("example")}>
						Example
					</Heading>
					<TypedocSummary summary={exampleTag.summary} />
				</>
			)}

			{seeTag?.summary && (
				<Callout variant="info">
					<TypedocSummary summary={seeTag.summary} />
				</Callout>
			)}

			{doc.members?.map((member) => {
				return (
					<MemberTDoc
						doc={member}
						level={props.level + 1}
						enumName={doc.name}
						key={member.name}
					/>
				);
			})}
		</>
	);
}

export function getEnumCode(doc: EnumDoc) {
	return `enum ${doc.name} {
    ${doc.members?.map((member) => member.name).join(",\n")}}`;
}

function MemberTDoc(props: {
	doc: EnumDoc["members"][number];
	level: number;
	enumName: string;
}) {
	const member = props.doc;

	return (
		<div key={member.name}>
			<br />
			<Heading level={props.level + 1} id={member.name}>
				{member.name}
			</Heading>
			{member.summary && <TypedocSummary summary={member.summary} />}
			<CodeBlock
				lang="ts"
				code={`${props.enumName}.${member.name}: ${member.value}`}
			/>
		</div>
	);
}
