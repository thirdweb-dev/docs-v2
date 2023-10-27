import { FunctionDoc, FunctionSignature } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { RenderSummary } from "./Summary";
import { Heading } from "../Document/Heading";
import { Callout } from "../Document/Callout";
import { SourceLink } from "./SourceLink";
import { Details } from "../Document/Details";
import { Deprecated } from "./Deprecated";

export function RenderFunctionDoc(props: {
	doc: FunctionDoc;
	level: number;
	hideTitle?: boolean;
}) {
	const { doc } = props;
	const multipleSignatures = doc.signatures
		? doc.signatures?.length > 1
		: false;

	return (
		<>
			{!props.hideTitle && (
				<Heading level={props.level} id={doc.name}>
					{doc.name}
				</Heading>
			)}

			{doc.source && <SourceLink href={doc.source} />}
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

function RenderFunctionSignature(props: {
	signature: FunctionSignature;
	signatureId?: number;
	name: string;
	level: number;
}) {
	const { signature, name } = props;

	const deprecatedTag = signature.blockTags?.find(
		(t) => t.tag === "@deprecated",
	);

	const remarksTag = signature.blockTags?.find((t) => t.tag === "@remarks");
	const seeTags = signature.blockTags?.filter((t) => t.tag === "@see");
	const exampleTag = signature.blockTags?.find((t) => t.tag === "@example");

	return (
		<>
			{props.signatureId && (
				<Heading level={props.level} id={`signature-${props.signatureId}`}>
					Signature
					<span className="font-normal text-f-300">#{props.signatureId}</span>
				</Heading>
			)}

			{deprecatedTag && <Deprecated tag={deprecatedTag} />}
			{signature.summary && <RenderSummary summary={signature.summary} />}
			{remarksTag?.summary && <RenderSummary summary={remarksTag.summary} />}

			<CodeBlock code={getFunctionSignatureCode(name, signature)} lang="ts" />

			{seeTags?.map((seeTag, i) => {
				if (seeTag.summary) {
					return (
						<Callout variant="info" key={i}>
							<RenderSummary summary={seeTag.summary} />
						</Callout>
					);
				}
			})}

			{exampleTag && (
				<div>
					<Heading level={props.level} id="example">
						Example
					</Heading>
					{exampleTag.summary && <RenderSummary summary={exampleTag.summary} />}
				</div>
			)}

			{signature.parameters && (
				<div>
					{props.signature.parameters?.map((param) => {
						return (
							<Details
								key={param.name}
								level={props.level + 1}
								summary={
									<span>
										<span className="font-mono">{param.name}</span>
										{param.flags?.isOptional && (
											<InlineCode
												code="optional"
												className="ml-2 text-sm text-accent-500"
											/>
										)}
									</span>
								}
							>
								{param.type && (
									<CodeBlock
										code={`let ${param.name}: ${param.type}`}
										lang="ts"
									/>
								)}
							</Details>
						);
					})}
				</div>
			)}

			{signature.returns && (
				<Details
					summary={<span className="font-mono">Returns</span>}
					level={props.level + 1}
				>
					{signature.returns.summary && (
						<RenderSummary summary={signature.returns.summary} />
					)}

					{signature.returns.type && (
						<CodeBlock
							code={`type ReturnType = ${signature.returns.type}`}
							lang="ts"
						/>
					)}
				</Details>
			)}
		</>
	);
}

export function getFunctionSignatureCode(
	name: string,
	signature: FunctionSignature,
) {
	const paramList = signature.parameters
		? signature.parameters
				.map((param) => {
					const postfix = param.flags?.isOptional ? "?" : "";
					const prefix = param.flags?.isRest ? "..." : "";
					return `${prefix}${param.name}${postfix}: ${param.type}`;
				})
				.join(", ")
		: "";

	const returnType = signature.returns?.type ?? "void";

	const typeParams = signature.typeParameters
		? `<${signature.typeParameters
				.map(
					(param) =>
						`${param.name}${
							param.extendsType ? ` extends ${param.extendsType}` : ""
						}`,
				)
				.join(", ")}>`
		: "";

	return `function ${name}${typeParams}(${paramList}) : ${returnType}`;
}
