import { ClassDoc } from "typedoc-better-json";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { FunctionTDoc } from "./Function";
import { CodeBlock } from "../../../../components/Document/Code";
import { VariableTDoc } from "./Variable";
import { AccessorTDoc } from "./Accessor";
import { Details } from "../../../../components/Document/Details";

export function ClassTDoc(props: { doc: ClassDoc }) {
	const { doc } = props;

	return (
		<div>
			<Heading level={1} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}

			<CodeBlock lang="ts" code={getClassSignatureDoc(doc)} />

			{/* Constructor */}
			{doc.constructor && (
				<Details
					id="constructor"
					level={2}
					summary="Constructor"
					headingClassName="font-mono"
				>
					<FunctionTDoc doc={doc.constructor} level={2} showHeading={false} />
				</Details>
			)}

			{/* Methods */}
			{doc.methods && (
				<div>
					<Heading level={2} id="methods">
						Methods
					</Heading>
					<div>
						{doc.methods.map((method, i) => {
							const flags = method.signatures && method.signatures[0]?.flags;
							return (
								<Details
									key={i}
									summary={method.name}
									id={method.name}
									headingClassName="font-mono"
									flags={[
										flags?.isOptional ? "optional" : "",
										flags?.isPrivate ? "private" : "",
										flags?.isProtected ? "protected" : "",
										flags?.isStatic ? "static" : "",
									].filter((w) => w)}
								>
									<FunctionTDoc
										doc={method}
										key={method.name}
										level={3}
										showHeading={false}
									/>
								</Details>
							);
						})}
					</div>
				</div>
			)}

			{/* Properties */}
			{doc.properties && (
				<div>
					<Heading level={2} id="properties">
						Properties
					</Heading>
					<div>
						{doc.properties.map((property, i) => {
							const flags: string[] = [];
							if (property.flags?.isPrivate) {
								flags.push("private");
							}
							return (
								<Details
									key={i}
									summary={property.name}
									id={property.name}
									headingClassName="font-mono"
									flags={flags}
								>
									<VariableTDoc
										doc={property}
										key={property.name}
										level={3}
										showHeading={false}
									/>
								</Details>
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
								<Details key={i} id={accessor.name} summary={accessor.name}>
									<AccessorTDoc doc={accessor} key={accessor.name} level={3} />
								</Details>
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
