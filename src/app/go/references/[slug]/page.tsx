import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { fetchGoReference } from "../fetchGoReference";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamicParams = false;

type PageProps = { params: { slug: string } };

export default async function Page(props: PageProps) {
	const goReference = await fetchGoReference();
	const apiName = props.params.slug;

	const selectedClass = goReference.types.find((d) => d.typeName === apiName);
	const selectedFunction = goReference.functions.find(
		(d) => d.functionName === apiName,
	);

	const apiInfo = selectedFunction || selectedClass;

	if (!apiInfo) {
		notFound();
	}

	return (
		<ReferenceLayout
			crumbs={[
				{
					name: "Go",
					href: "/go",
				},
				{
					name: "References",
					href: "/go/references",
				},
				{
					name: apiName,
					href: `/go/references/${
						"functionName" in apiInfo ? apiInfo.functionName : apiInfo.typeName
					}`,
				},
			]}
			lang="go"
			sideBar={{
				name: "Go SDK",
				activeLink: apiName,
				links: {
					classes: goReference.types.map((type) => {
						return {
							name: type.typeName,
							href: `/go/references/${type.typeName}`,
						};
					}),
					functions: goReference.functions.map((type) => {
						return {
							name: type.functionName,
							href: `/go/references/${type.functionName}`,
						};
					}),
				},
			}}
			selected={
				"functionName" in apiInfo
					? {
							type: "function",
							name: apiInfo.functionName,
							description: apiInfo.comments || undefined,
							args: apiInfo.functionParams.map((parameter) => {
								return {
									name: parameter.paramName,
									type: parameter.paramType,
								};
							}),
							return: {
								type: apiInfo.returnType,
							},
					  }
					: {
							type: "class",
							name: apiInfo.typeName,
							description: apiInfo.comments || undefined,
							properties: apiInfo.fields.map((field) => {
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

export async function generateStaticParams() {
	const data = await fetchGoReference();
	return [
		...data.types.map((type) => ({
			slug: type.typeName,
		})),
		...data.functions.map((type) => ({
			slug: type.functionName,
		})),
	];
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const pythonReference = await fetchGoReference();
	const { slug } = props.params;

	const genericDescription = "Go SDK | thirdweb";
	const genericTitle = "Go SDK | thirdweb docs";

	const apiInfo =
		pythonReference.types.find((d) => d.typeName === slug) ||
		pythonReference.functions.find((d) => d.functionName === slug);

	if (!apiInfo) {
		notFound();
	}

	return {
		title: `${slug} - ${genericTitle}`,
		description: apiInfo.comments || genericDescription,
	};
}
