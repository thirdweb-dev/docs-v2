import { ClassDoc } from "typedoc-better-json";
import { Heading } from "../Document/Heading";
import { SourceLink } from "./SourceLink";
import {
	RenderFunctionDoc,
	getFunctionSignatureCode,
} from "./RenderFunctionDoc";
import { CodeBlock } from "../Document/Code";
import { RenderVariableDoc } from "./RenderVariableDoc";
import { RenderAccessorDoc } from "./RenderAccessorDoc";

export function RenderClassDoc(props: { doc: ClassDoc }) {
	const { doc } = props;

	return (
		<div>
			<Heading level={1} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLink href={doc.source} />}

			<CodeBlock lang="ts" code={getClassSignatureDoc(doc)} />

			{/* Constructor */}
			{doc.constructor && <RenderFunctionDoc doc={doc.constructor} level={2} />}

			{/* Methods */}
			{doc.methods && (
				<div>
					<Heading level={2} id="methods" className="text-5xl">
						Methods
					</Heading>
					<div>
						{doc.methods.map((method, i) => {
							return (
								<div key={i} className="mb-14">
									<RenderFunctionDoc doc={method} key={method.name} level={3} />
								</div>
							);
						})}
					</div>
				</div>
			)}

			{/* Properties */}
			{doc.properties && (
				<div>
					<Heading level={2} id="properties" className="text-5xl">
						Properties
					</Heading>
					<div>
						{doc.properties.map((property, i) => {
							return (
								<div key={i} className="mb-14">
									<RenderVariableDoc
										doc={property}
										key={property.name}
										level={3}
									/>
								</div>
							);
						})}
					</div>
				</div>
			)}

			{/* Accessor */}
			{doc.accessors && (
				<div>
					<Heading level={2} id="properties" className="text-5xl">
						Accessors
					</Heading>
					<div>
						{doc.accessors.map((accessor, i) => {
							return (
								<div key={i} className="mb-14">
									<RenderAccessorDoc
										doc={accessor}
										key={accessor.name}
										level={3}
									/>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

function getClassSignatureDoc(classDoc: ClassDoc) {
	return `class ${classDoc.name} ${
		classDoc.implements ? `implements ${classDoc.implements?.join(", ")}` : ""
	} {}`;
}
