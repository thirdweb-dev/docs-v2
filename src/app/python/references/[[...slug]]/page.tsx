import { PythonReference } from "./types";
import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";

export default async function Page(props: { params: { slug?: string[] } }) {
	const res = await fetch(
		"https://ipfs.io/ipfs/QmYXoK9hbdvEK11ymHnXaYFXRxAfseFcQHcXW16d4PT82T/python_output.json",
	);

	if (!res.ok) {
		throw new Error("Failed to fetch python references");
	}

	const data = (await res.json()) as PythonReference;

	const selectedTypeName = props.params.slug?.[0] || data.types[0].typeName;

	const selectedApiInfo =
		data.types.find((d) => d.typeName === selectedTypeName) || data.types[0];

	return (
		<ReferenceLayout
			lang="python"
			sideBar={{
				name: "Python SDK",
				activeLink: selectedTypeName,
				links: {
					classes: data.types.map((type) => {
						return {
							name: type.typeName,
							href: `/python/references/${type.typeName}`,
						};
					}),
				},
			}}
			selected={{
				type: "class",
				name: selectedApiInfo.typeName,
				description: selectedApiInfo.comments || undefined,
				methods: selectedApiInfo.methods?.map((method) => {
					return {
						name: method.functionName,
						description: method.comments || undefined,
						args: method.functionParams?.map((arg) => {
							return {
								name: arg.paramName,
								type: arg.paramType,
							};
						}),
						return: {
							type: method.returnType,
						},
					};
				}),
				properties: selectedApiInfo.fields.map((field) => {
					return {
						name: field.fieldName,
						type: field.fieldType,
					};
				}),
			}}
		/>
	);
}
