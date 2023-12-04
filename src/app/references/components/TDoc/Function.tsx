import {
	FunctionDoc,
	FunctionSignature,
	getFunctionSignature,
} from "typedoc-better-json";
import { CodeBlock } from "../../../../components/Document/Code";
import { TypedocSummary } from "./Summary";
import { Heading } from "../../../../components/Document/Heading";
import { Callout } from "../../../../components/Document/Callout";
import { SourceLinkTypeDoc } from "./SourceLink";
import { Details } from "../../../../components/Document/Details";
import { DeprecatedCalloutTDoc } from "./Deprecated";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { getTags } from "./utils/getTags";
import { getTokenLinks } from "./utils/getTokenLinks";

export function FunctionTDoc(props: {
	doc: FunctionDoc;
	level: number;
	showHeading?: boolean;
}) {
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	const { doc } = props;
	const multipleSignatures = doc.signatures
		? doc.signatures?.length > 1
		: false;

	return (
		<>
			{props.showHeading !== false && (
				<>
					<Heading level={props.level} id={slugger.slug(doc.name)}>
						{doc.name}
					</Heading>
				</>
			)}

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}
			{doc.signatures &&
				doc.signatures.map((signature, i) => (
					<RenderFunctionSignature
						signatureId={multipleSignatures ? i + 1 : undefined}
						signature={signature}
						name={doc.name}
						level={props.level + 1}
						key={i}
					/>
				))}
		</>
	);
}

async function RenderFunctionSignature(props: {
	signature: FunctionSignature;
	signatureId?: number;
	name: string;
	level: number;
}) {
	const { signature, name } = props;
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	const { deprecatedTag, remarksTag, seeTag, exampleTag } = getTags(
		signature.blockTags,
	);

	const subLevel = props.signatureId ? props.level + 1 : props.level;

	const signatureCode = getFunctionSignature(name, signature);

	const tokenLinks = signatureCode.tokens
		? await getTokenLinks(signatureCode.tokens)
		: undefined;

	return (
		<>
			{props.signatureId && (
				<>
					<Heading
						level={props.level}
						id={slugger.slug(
							props.name + "-signature-" + props.signatureId,
							false,
						)}
						className="text-accent-500"
					>
						Signature
						<span className="font-normal text-f-300">
							{" "}
							#{props.signatureId}
						</span>
					</Heading>
				</>
			)}

			{deprecatedTag && <DeprecatedCalloutTDoc tag={deprecatedTag} />}
			{signature.summary && <TypedocSummary summary={signature.summary} />}
			{remarksTag?.summary && <TypedocSummary summary={remarksTag.summary} />}

			{seeTag?.summary && (
				<Callout variant="info">
					<TypedocSummary summary={seeTag.summary} />
				</Callout>
			)}

			<CodeBlock code={signatureCode.code} lang="ts" tokenLinks={tokenLinks} />

			{exampleTag?.summary && (
				<>
					<Heading level={subLevel} id={slugger.slug("example")}>
						Example
					</Heading>
					<TypedocSummary summary={exampleTag.summary} />
				</>
			)}

			{signature.parameters && (
				<div className="mt-5">
					<Heading
						level={subLevel}
						id={slugger.slug(props.name + "--param--" + props.name, false)}
					>
						Parameters
					</Heading>
					{props.signature.parameters?.map(async (param) => {
						return (
							<Details
								id={slugger.slug(param.name)}
								key={param.name}
								level={props.level + 1}
								summary={param.name}
								tags={[
									param.flags?.isOptional ? "optional" : "",
									param.flags?.isPrivate ? "private" : "",
									param.flags?.isProtected ? "protected" : "",
									param.flags?.isStatic ? "static" : "",
								].filter((w) => w)}
							>
								{param.type && (
									<div>
										<CodeBlock
											code={`let ${param.name}: ${param.type.code}`}
											tokenLinks={
												param.type.tokens
													? await getTokenLinks(param.type.tokens)
													: undefined
											}
											lang="ts"
										/>
									</div>
								)}
							</Details>
						);
					})}
				</div>
			)}

			{signature.returns && (
				<div className="mt-5">
					<Heading level={subLevel} id={slugger.slug(props.name + "-returns")}>
						Returns
					</Heading>
					<div>
						{signature.returns.summary && (
							<TypedocSummary summary={signature.returns.summary} />
						)}

						{signature.returns.type && (
							<CodeBlock
								code={`type ReturnType = ${signature.returns.type.code}`}
								lang="ts"
								tokenLinks={
									signature.returns.type.tokens
										? await getTokenLinks(signature.returns.type.tokens)
										: undefined
								}
							/>
						)}
					</div>
				</div>
			)}

			{props.signatureId && <div className="h-10" />}
		</>
	);
}
