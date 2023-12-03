import { InterfaceDoc, TypeRef } from "typedoc-better-json";
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
import { getTokenLinks } from "@/contexts/linkMap";

export function TypeTDoc(props: { doc: InterfaceDoc; level: number }) {
	const { doc } = props;
	const { deprecatedTag, exampleTag, remarksTag, seeTag } = getTags(
		doc.blockTags,
	);

	const subLevel = props.level + 1;

	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	const { code: signatureCode, references } = getInterfaceCode(doc);

	return (
		<>
			<Heading level={props.level} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}

			{deprecatedTag && <DeprecatedCalloutTDoc tag={deprecatedTag} />}
			{doc.summary && <TypedocSummary summary={doc.summary} />}
			{remarksTag?.summary && <TypedocSummary summary={remarksTag.summary} />}

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

export function getInterfaceCode(doc: InterfaceDoc): TypeRef {
	if (!doc.type)
		return {
			code: doc.name,
		};

	let code: string;
	const references = doc.type.references;

	const generic = doc.typeParameters
		? `<${doc.typeParameters
				.map((t) => {
					t.defaultType?.references?.forEach((r) => references?.push(r));
					const defaultVal = t.defaultType ? ` = ${t.defaultType.code}` : "";
					t.extendsType?.references?.forEach((r) => references?.push(r));
					return (
						(t.extendsType
							? `${t.name} extends ${t.extendsType.code}`
							: t.name) + defaultVal
					);
				})
				.join(", ")}>`
		: "";

	if (doc.extends) {
		const extendsClause = doc.extends
			? `extends ${doc.extends
					.map((ext) => {
						ext.references?.forEach((r) => references?.push(r));
						return ext.code;
					})
					.join(", ")}`
			: "";

		code = `interface ${doc.name}${generic} ${extendsClause} ${doc.type.code}`;
	}
	code = `type ${doc.name}${generic} = ${doc.type.code}`;

	return {
		code,
		references: references,
	};
}
