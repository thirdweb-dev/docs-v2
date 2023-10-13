import { GoReference, GoType } from "./types";
import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";

export default async function Page(props: { params: { slug?: string[] } }) {
	const res = await fetch(
		"https://ipfs.io/ipfs/QmbHv4kipbGqt2LV7knv17s8syFqhh4HdXeN4cEU1V6AVA/go-output.json",
	);

	if (!res.ok) {
		throw new Error("Failed to fetch go references");
	}

	const data = (await res.json()) as GoReference;

	const selectedTypeName = props.params.slug?.[0] || data.types[0].typeName;

	let selectedClass = data.types.find((d) => d.typeName === selectedTypeName);

	const selectedFunction = data.functions.find(
		(d) => d.functionName === selectedTypeName,
	);

	const classToShow = selectedClass || data.types[0];

	return (
		<ReferenceLayout
			lang="go"
			sideBar={{
				name: "Go SDK",
				activeLink: selectedTypeName,
				links: {
					classes: data.types.map((type) => {
						return {
							name: type.typeName,
							href: `/go/references/${type.typeName}`,
						};
					}),
					functions: data.functions.map((type) => {
						return {
							name: type.functionName,
							href: `/go/references/${type.functionName}`,
						};
					}),
				},
			}}
			selected={
				selectedFunction
					? {
							type: "function",
							name: selectedFunction.functionName,
							description: selectedFunction.comments || undefined,
							args: selectedFunction.functionParams.map((parameter) => {
								return {
									name: parameter.paramName,
									type: parameter.paramType,
								};
							}),
							return: {
								type: selectedFunction.returnType,
							},
					  }
					: {
							type: "class",
							name: classToShow.typeName,
							description: classToShow.comments || undefined,
							properties: classToShow.fields.map((field) => {
								return {
									name: field.fieldName,
									type: field.fieldType,
								};
							}),
					  }
			}
		/>
	);
}
