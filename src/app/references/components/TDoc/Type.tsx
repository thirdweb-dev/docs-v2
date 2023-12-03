import { InterfaceDoc } from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { TypeDeclarationTDoc } from "./TypeDeclaration";
import { Details } from "../../../../components/Document/Details";
import { getTags } from "./utils/getTags";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { DeprecatedCalloutTDoc } from "./Deprecated";
import { Callout } from "@/components/Document";

export function TypeTDoc(props: { doc: InterfaceDoc; level: number }) {
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

			<CodeBlock lang="ts" code={getInterfaceCode(doc)} />

			{exampleTag?.summary && (
				<>
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

			{doc.typeDeclaration?.map((declaration, i) => {
				return (
					<Details key={i} summary={declaration.name} id={declaration.name}>
						<TypeDeclarationTDoc
							showHeading={false}
							doc={declaration}
							level={props.level + 1}
							key={i}
						/>
					</Details>
				);
			})}
		</>
	);
}

export function getInterfaceCode(doc: InterfaceDoc) {
	if (!doc.type) return doc.name;

	const generic = doc.typeParameters
		? `<${doc.typeParameters
				.map((t) => {
					const defaultVal = t.defaultType ? ` = ${t.defaultType}` : "";
					return (
						(t.extendsType ? `${t.name} extends ${t.extendsType}` : t.name) +
						defaultVal
					);
				})
				.join(", ")}>`
		: "";

	if (doc.extends) {
		const extendsClause = doc.extends
			? `extends ${doc.extends.join(", ")}`
			: "";

		return `interface ${doc.name}${generic} ${extendsClause} ${doc.type}`;
	}
	return `type ${doc.name}${generic} = ${doc.type}`;
}
