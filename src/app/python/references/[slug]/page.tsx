import { notFound } from "next/navigation";
import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchPythonReference } from "../fetchPythonReference";

export const dynamicParams = false;

type PageProps = { params: { slug: string } };

export default async function Page(props: PageProps) {
	const data = await fetchPythonReference();
	const apiName = props.params.slug;
	const apiInfo = data.types.find((d) => d.typeName === apiName);

	if (!apiInfo) {
		notFound();
	}

	return (
		<ReferenceLayout
			lang="python"
			sideBar={{
				name: "Python SDK",
				activeLink: apiName,
				links: {
					classes: data.types.map((type) => {
						return {
							name: type.typeName,
							href: `/python/references/${type.typeName}`,
						};
					}),
				},
			}}
			crumbs={[
				{ name: "Python", href: "/python" },
				{ name: "References", href: "/python/references" },
				{
					name: apiName,
					href: `/python/references/${apiName}`,
				},
			]}
			selected={{
				type: "class",
				name: apiInfo.typeName,
				description: apiInfo.comments || undefined,
				methods: apiInfo.methods?.map((method) => {
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
				properties: apiInfo.fields.map((field) => {
					return {
						name: field.fieldName,
						type: field.fieldType,
					};
				}),
			}}
		/>
	);
}

export async function generateStaticParams() {
	const pythonReference = await fetchPythonReference();
	return pythonReference.types.map((type) => ({
		slug: type.typeName,
	}));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const pythonReference = await fetchPythonReference();
	const { slug } = props.params;

	const genericDescription = "Python SDK | thirdweb";
	const genericTitle = "Python SDK | thirdweb docs";

	const apiInfo = pythonReference.types.find((d) => d.typeName === slug);

	if (!apiInfo) {
		notFound();
	}

	return {
		title: `${slug} - ${genericTitle}`,
		description: apiInfo.comments || genericDescription,
	};
}
