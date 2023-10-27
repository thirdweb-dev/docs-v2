import { FunctionDoc, FunctionSignature } from "typedoc-better-json";
import { CodeBlock, InlineCode } from "../Document/Code";
import { Summary } from "./Summary";
import { Heading } from "../Document/Heading";
import { DocLink } from "../Document/DocLink";
import { Callout } from "../Document/Callout";

export function RenderFunctionDoc(props: { doc: FunctionDoc }) {
	const { doc } = props;
	const multipleSignatures = doc.signatures
		? doc.signatures?.length > 1
		: false;

	return (
		<div>
			<Heading as="h1" id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && (
				<DocLink href={doc.source} className="mb-8 block text-sm">
					<span className="text-sm text-f-300"> Defined in </span>
					{doc.source.split("/packages/")[1]}
				</DocLink>
			)}

			{doc.signatures &&
				doc.signatures.map((signature, i) => (
					<RenderFunctionSignature
						signatureId={multipleSignatures ? i + 1 : undefined}
						signature={signature}
						name={doc.name}
						key={i}
					/>
				))}
		</div>
	);
}

function RenderFunctionSignature(props: {
	signature: FunctionSignature;
	signatureId?: number;
	name: string;
}) {
	const { signature, name } = props;

	const deprecatedTag = signature.blockTags?.find(
		(t) => t.tag === "@deprecated",
	);

	const remarksTag = signature.blockTags?.find((t) => t.tag === "@remarks");
	const seeTags = signature.blockTags?.filter((t) => t.tag === "@see");
	const exampleTag = signature.blockTags?.find((t) => t.tag === "@example");

	return (
		<div>
			{props.signatureId && (
				<Heading as="h2" id={`signature-${props.signatureId}`}>
					Signature
					<span className="font-normal text-f-300">#{props.signatureId}</span>
				</Heading>
			)}

			{deprecatedTag && (
				<Callout variant="warning" disableIcon>
					<div className="flex w-full flex-col gap-2">
						<div className="text-lg font-semibold"> Deprecated </div>
						<div>
							{deprecatedTag.summary && (
								<Summary summary={deprecatedTag.summary} />
							)}
						</div>
					</div>
				</Callout>
			)}

			{signature.summary && <Summary summary={signature.summary} />}
			{remarksTag?.summary && <Summary summary={remarksTag.summary} />}

			<CodeBlock code={getFunctionSignatureCode(name, signature)} lang="ts" />

			{seeTags?.map((seeTag, i) => {
				if (seeTag.summary) {
					return (
						<Callout variant="info" key={i}>
							<Summary summary={seeTag.summary} />
						</Callout>
					);
				}
			})}

			{exampleTag && (
				<div>
					<Heading as="h3" id="example">
						Example
					</Heading>
					{exampleTag.summary && <Summary summary={exampleTag.summary} />}
				</div>
			)}

			{signature.parameters && (
				<div>
					<Heading as="h3" id="params">
						Parameters
					</Heading>

					<div className="flex flex-col ">
						{props.signature.parameters?.map((param) => {
							return (
								<div key={param.name}>
									<div>
										<Heading
											as="h4"
											id={param.name}
											anchorClassName="mt-4 "
											className="flex gap-2 text-f-200"
										>
											{param.name}
											{param.flags?.isOptional && (
												<InlineCode
													code="optional"
													className="text-sm text-accent-500"
												/>
											)}
										</Heading>
										{param.type && (
											<CodeBlock
												code={`let ${param.name}: ${param.type}`}
												lang="ts"
											/>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}

			{signature.returns && (
				<div>
					<Heading as="h3" id="params">
						Returns
					</Heading>

					{signature.returns.summary && (
						<Summary summary={signature.returns.summary} />
					)}

					{signature.returns.type && (
						<CodeBlock
							code={`type ReturnType = ${signature.returns.type}`}
							lang="ts"
						/>
					)}
				</div>
			)}
		</div>
	);
}

function getFunctionSignatureCode(name: string, signature: FunctionSignature) {
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
