import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { CodeBlock } from "../Document/Code";
import { Details } from "../Document/Details";
import { Heading } from "../Document/Heading";
import { Paragraph } from "../Document/Paragraph";
import { RenderNParameterDoc } from "./RenderNParameterDoc";
import { pythonSignatureCode, goSignatureCode } from "./signature";
import { cleanPythonType } from "./temp";
import { NFunctionDoc, NLang } from "./types";

export function RenderNFunctionDoc(props: {
	doc: NFunctionDoc;
	lang: NLang;
	level: number;
	slugPrefix: string;
}) {
	const { doc, level } = props;
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	return (
		<div>
			<Heading
				level={level}
				id={slugger.slug(`${props.slugPrefix}--${doc.name}`)}
			>
				{doc.name}
			</Heading>

			{doc.description && <Paragraph> {doc.description}</Paragraph>}

			<CodeBlock
				lang={props.lang}
				code={
					props.lang === "python"
						? pythonSignatureCode(doc)
						: goSignatureCode(doc)
				}
			/>

			{doc.parameters && doc.parameters.length > 0 && (
				<div>
					{doc.parameters.map((param) => {
						return (
							<Details
								key={param.name}
								summary={param.name}
								id={slugger.slug(
									`${props.slugPrefix}--${doc.name}--${param.name}`,
								)}
							>
								<RenderNParameterDoc
									slugPrefix={`${props.slugPrefix}--${doc.name}`}
									doc={param}
									level={level + 1}
									lang={props.lang}
									showHeading={false}
								/>
							</Details>
						);
					})}
				</div>
			)}

			{doc.returns && (
				<div>
					{doc.returns.type && (
						<Details
							summary="Returns"
							id={slugger.slug(`${doc.name}--returns`)}
						>
							{doc.returns.description && (
								<Paragraph>{doc.returns.description}</Paragraph>
							)}

							<CodeBlock
								lang={props.lang}
								code={
									props.lang === "python"
										? cleanPythonType(doc.returns.type)
										: doc.returns.type
								}
							/>
						</Details>
					)}
				</div>
			)}
		</div>
	);
}
