import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchGoReference } from "./fetchGoReference";
import Content from "./content.mdx";

export const metadata: Metadata = {
	title: "Go SDK | thirdweb docs",
	description: "Go SDK | thirdweb docs",
};

export default async function Page() {
	const goReference = await fetchGoReference();

	return (
		<ReferenceLayout
			lang="go"
			sideBar={{
				name: "Go SDK",
				links: {
					classes: goReference.types.map((type) => {
						return {
							name: type.typeName,
							href: `/go/references/${type.typeName}`,
						};
					}),
					functions: goReference.functions.map((func) => {
						return {
							name: func.functionName,
							href: `/go/references/${func.functionName}`,
						};
					}),
				},
			}}
			crumbs={[
				{ name: "Go", href: "/go" },
				{ name: "References", href: "/go/references" },
			]}
			customContent={<Content />}
		/>
	);
}
