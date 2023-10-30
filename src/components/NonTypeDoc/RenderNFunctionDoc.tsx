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
	showHeading?: boolean;
}) {
	const { doc, level } = props;
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");
	const subLevel = props.showHeading === false ? level : level + 1;

	return (
		<div>
			{props.showHeading !== false && (
				<Heading
					level={level}
					id={slugger.slug(`${props.slugPrefix}--${doc.name}`)}
				>
					{doc.name}
				</Heading>
			)}

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
					<Heading
						level={subLevel}
						id={slugger.slug(`${props.slugPrefix}--${doc.name}--params`)}
					>
						Parameters
					</Heading>
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
									level={subLevel + 1}
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
						<div>
							<Heading
								id={slugger.slug(`${doc.name}--returns`)}
								level={subLevel}
							>
								Returns
							</Heading>

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
						</div>
					)}
				</div>
			)}
		</div>
	);
}
