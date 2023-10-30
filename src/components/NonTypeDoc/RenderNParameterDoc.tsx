import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import { CodeBlock } from "../Document/Code";
import { Heading } from "../Document/Heading";
import { Paragraph } from "../Document/Paragraph";
import { cleanPythonParameterType, cleanPythonType } from "./temp";
import { NLang, NParameterDoc } from "./types";

export function RenderNParameterDoc(props: {
	doc: NParameterDoc;
	level: number;
	lang: NLang;
	showHeading?: boolean;
	slugPrefix: string;
}) {
	const { doc, level, showHeading } = props;
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

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
