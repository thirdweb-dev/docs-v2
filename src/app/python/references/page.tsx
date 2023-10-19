import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchPythonReference } from "./fetchPythonReference";
import Content from "./content.mdx";

export const metadata: Metadata = {
	title: "Python SDK | thirdweb docs",
	description: "Python SDK | thirdweb docs",
};

export default async function Page() {
	const data = await fetchPythonReference();

	return (
		<ReferenceLayout
			lang="python"
			sideBar={{
				name: "Python SDK",
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
			]}
			customContent={<Content />}
		/>
	);
}
