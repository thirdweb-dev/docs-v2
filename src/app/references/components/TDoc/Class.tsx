import { ClassDoc, FunctionDoc, getClassSignature } from "typedoc-better-json";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { FunctionTDoc } from "./Function";
import { CodeBlock } from "../../../../components/Document/Code";
import { VariableTDoc } from "./Variable";
import { AccessorTDoc } from "./Accessor";
import { Details } from "../../../../components/Document/Details";
import { getTokenLinks } from "./utils/getTokenLinks";
import { getTags } from "./utils/getTags";
import { Callout } from "@/components/Document";
import { DeprecatedCalloutTDoc } from "./Deprecated";
import { TypedocSummary } from "./Summary";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";

export async function ClassTDoc(props: { doc: ClassDoc }) {
	const { doc } = props;

	const { deprecatedTag, remarksTag, seeTag, exampleTag } = getTags(
		doc.blockTags,
	);

	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	const methods = doc.methods?.filter((method) => {
		const flags = method.signatures && method.signatures[0]?.flags;
		return (
			!flags?.isPrivate && !flags?.isProtected && !method.name.startsWith("#")
		);
	});

	const regularMethods = methods?.filter((m) => {
		if (m.signatures && m.signatures[0] && m.signatures[0]?.inheritedFrom) {
			return false;
		}
		return true;
	});

	const inheritedMethods = methods?.filter((m) => {
		if (m.signatures && m.signatures[0] && m.signatures[0]?.inheritedFrom) {
			return true;
		}
		return false;
	});

	const properties = doc.properties?.filter((property) => {
		return !property.flags?.isPrivate && !property.flags?.isProtected;
	});

	const accessors = doc.accessors?.filter((accessor) => {
		return !accessor.flags?.isPrivate && !accessor.flags?.isProtected;
	});

	const { code: signatureCode, tokens } = getClassSignature(doc);

	const renderMethods = (_methods: FunctionDoc[]) =>
		_methods.map((method, i) => {
			const flags = method.signatures && method.signatures[0]?.flags;
			return (
				<Details
					key={i}
					summary={method.name}
					id={method.name}
					tags={[
						flags?.isOptional ? "optional" : "",
						flags?.isStatic ? "static" : "",
					].filter((w) => w)}
				>
					<FunctionTDoc
						doc={method}
						key={method.name}
						level={3}
						showHeading={false}
					/>
				</Details>
			);
		});

	return (
		<div>
			<Heading level={1} id={doc.name}>
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
				tokenLinks={tokens ? await getTokenLinks(tokens) : undefined}
			/>

			{/* Constructor */}
			{doc.constructor && (
				<Details id="constructor" level={2} summary="Constructor">
					<FunctionTDoc doc={doc.constructor} level={2} showHeading={false} />
				</Details>
			)}

			{exampleTag?.summary && (
				<>
					<Heading level={2} id={slugger.slug("example")}>
						Example
					</Heading>
					<TypedocSummary summary={exampleTag.summary} />
				</>
			)}

			{/* Methods */}
			{regularMethods && regularMethods.length > 1 && (
				<div>
					<Heading level={2} id="methods">
						Methods
					</Heading>
					<div>{renderMethods(regularMethods)}</div>
				</div>
			)}

			{/* Inherited methods */}
			{inheritedMethods && inheritedMethods.length > 1 && (
				<div>
					<Heading level={2} id="methods">
						Inherited Methods
					</Heading>
					<div>{renderMethods(inheritedMethods)}</div>
				</div>
			)}

			{/* Properties */}
			{properties && properties.length > 1 && (
				<div>
					<Heading level={2} id="properties">
						Properties
					</Heading>
					<div>
						{properties.map((property, i) => {
							return (
								<Details key={i} summary={property.name} id={property.name}>
									<VariableTDoc
										doc={property}
										key={property.name}
										level={3}
										showHeading={false}
									/>
								</Details>
							);
						})}
					</div>
				</div>
			)}

			{/* Accessor */}
			{accessors && accessors.length > 1 && (
				<div>
					<Heading level={2} id="properties" className="text-5xl">
						Accessors
					</Heading>
					<div>
						{accessors.map((accessor, i) => {
							return (
								<Details key={i} id={accessor.name} summary={accessor.name}>
									<AccessorTDoc doc={accessor} key={accessor.name} level={3} />
								</Details>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
