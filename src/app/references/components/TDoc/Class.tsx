import { ClassDoc, getClassSignature } from "typedoc-better-json";
import { Heading } from "../../../../components/Document/Heading";
import { SourceLinkTypeDoc } from "./SourceLink";
import { FunctionTDoc } from "./Function";
import { CodeBlock } from "../../../../components/Document/Code";
import { VariableTDoc } from "./Variable";
import { AccessorTDoc } from "./Accessor";
import { Details } from "../../../../components/Document/Details";
import { getTokenLinks } from "./utils/getTokenLinks";

export async function ClassTDoc(props: { doc: ClassDoc }) {
	const { doc } = props;

	const methods = doc.methods?.filter((method) => {
		const flags = method.signatures && method.signatures[0]?.flags;
		return (
			!flags?.isPrivate && !flags?.isProtected && !method.name.startsWith("#")
		);
	});

	const properties = doc.properties?.filter((property) => {
		return !property.flags?.isPrivate && !property.flags?.isProtected;
	});

	const accessors = doc.accessors?.filter((accessor) => {
		return !accessor.flags?.isPrivate && !accessor.flags?.isProtected;
	});

	const { code: signatureCode, tokens } = getClassSignature(doc);

	return (
		<div>
			<Heading level={1} id={doc.name}>
				{doc.name}
			</Heading>

			{doc.source && <SourceLinkTypeDoc href={doc.source} />}

			<CodeBlock
				lang="ts"
				code={signatureCode}
				tokenLinks={tokens ? await getTokenLinks(tokens) : undefined}
			/>

			{/* Constructor */}
			{doc.constructor && (
				<Details id="constructor" level={2} summary="Constructor">
					<FunctionTDoc doc={doc.constructor} level={2} showHeading={false} />
				</Details>
			)}

			{/* Methods */}
			{methods && methods.length > 1 && (
				<div>
					<Heading level={2} id="methods">
						Methods
					</Heading>
					<div>
						{methods.map((method, i) => {
							const flags = method.signatures && method.signatures[0]?.flags;
							return (
								<Details
									key={i}
									summary={method.name}
									id={method.name}
									tags={[
										flags?.isOptional ? "optional" : "",
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
			{properties && properties.length > 1 && (
				<div>
					<Heading level={2} id="properties">
						Properties
					</Heading>
					<div>
						{properties.map((property, i) => {
							return (
								<Details key={i} summary={property.name} id={property.name}>
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
			{accessors && accessors.length > 1 && (
				<div>
					<Heading level={2} id="properties" className="text-5xl">
						Accessors
					</Heading>
					<div>
						{accessors.map((accessor, i) => {
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
