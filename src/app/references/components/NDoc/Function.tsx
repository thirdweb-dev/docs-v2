import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { CodeBlock } from "../../../../components/Document/Code";
import { Details } from "../../../../components/Document/Details";
import { Heading } from "../../../../components/Document/Heading";
import { Paragraph } from "../../../../components/Document/Paragraph";
import { ParameterNDoc } from "./Parameter";
import { pythonSignatureCode, goSignatureCode } from "./getSignatureCode";
import { cleanPythonType } from "./tempUtils";
import { FunctionNDocType, NLang } from "./types";

export function FunctionNDoc(props: {
	doc: FunctionNDocType;
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
				<>
					{props.level !== 1 && <br />}
					<Heading
						level={level}
						id={slugger.slug(`${props.slugPrefix}--${doc.name}`)}
					>
						{doc.name}
					</Heading>
				</>
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
					<br />
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
								<ParameterNDoc
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
							<br />
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
