import { sluggerContext } from "@/contexts/slugger";
import { Heading } from "../Document/Heading";
import { Paragraph } from "../Document/Paragraph";
import { RenderNFunctionDoc } from "./RenderNFunctionDoc";
import { RenderNParameterDoc } from "./RenderNParameterDoc";
import { RenderNPropertyDoc } from "./RenderNPropertyDoc";
import { NClassDoc, NFunctionDoc, NLang } from "./types";
import invariant from "tiny-invariant";
import { Details } from "../Document/Details";

export function RenderNClassDoc(props: {
	doc: NClassDoc;
	lang: NLang;
	level: number;
}) {
	const { doc, level } = props;
	const slugger = sluggerContext.get();
	invariant(slugger, "slugger context not set");

	return (
		<div>
			<Heading level={level} id={slugger.slug(doc.name)}>
				{doc.name}
			</Heading>

			{doc.description && <Paragraph> {doc.description}</Paragraph>}

			{doc.constructor && (
				<div>
					<Heading level={level + 1} id={slugger.slug("constructor")}>
						constructor
					</Heading>
					<RenderNFunctionDoc
						slugPrefix={doc.name}
						doc={doc.constructor}
						lang={props.lang}
						level={level + 2}
					/>
				</div>
			)}

			{doc.methods && doc.methods.length > 0 && (
				<div>
					<Heading
						level={level + 1}
						id={slugger.slug(`${doc.name}--methods`)}
						className="text-4xl"
					>
						Methods
					</Heading>
					{doc.methods.map((method) => {
						return (
							<Details
								id={slugger.slug(`${doc.name}--${method.name}`)}
								key={method.name}
								summary={method.name}
							>
								<RenderNFunctionDoc
									slugPrefix={doc.name}
									key={method.name}
									doc={method}
									lang={props.lang}
									level={level + 2}
									showHeading={false}
								/>
							</Details>
						);
					})}
				</div>
			)}

			{doc.properties && doc.properties.length > 0 && (
				<div>
					<Heading
						level={level + 1}
						id={slugger.slug(`${doc.name}--properties`)}
						className="text-4xl"
					>
						Properties
					</Heading>
					{doc.properties.map((param) => {
						return (
							<Details
								id={slugger.slug(`${doc.name}--${param.name}`)}
								key={param.name}
								summary={param.name}
							>
								<RenderNPropertyDoc
									slugPrefix={doc.name}
									key={param.name}
									doc={param}
									lang={props.lang}
									level={level + 2}
									showHeading={false}
								/>
							</Details>
						);
					})}
				</div>
			)}
		</div>
	);
}
