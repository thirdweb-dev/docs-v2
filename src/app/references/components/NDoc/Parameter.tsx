import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { CodeBlock } from "../../../../components/Document/Code";
import { Heading } from "../../../../components/Document/Heading";
import { Paragraph } from "../../../../components/Document/Paragraph";
import { cleanPythonParameterType } from "./tempUtils";
import { NLang, ParameterNDocType } from "./types";

export function ParameterNDoc(props: {
	doc: ParameterNDocType;
	level: number;
	lang: NLang;
	showHeading?: boolean;
	slugPrefix: string;
}) {
	const { doc, level } = props;
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	return (
		<div>
			{props.showHeading !== false && (
				<>
					<Heading
						level={level}
						id={slugger.slug(`${props.slugPrefix}--${doc.name}`)}
					>
						{doc.name}
					</Heading>
				</>
			)}

			{doc.description && <Paragraph> {doc.description}</Paragraph>}

			{doc.type && (
				<CodeBlock
					lang={props.lang}
					code={
						props.lang === "python"
							? `${doc.name}: ${cleanPythonParameterType(doc.type, doc.name)}`
							: `${doc.name}: ${doc.type}`
					}
				/>
			)}
		</div>
	);
}
