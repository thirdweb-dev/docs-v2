import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchGoReference } from "./fetchGoReference";

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
				},
			}}
			crumbs={[
				{ name: "Go", href: "/go" },
				{ name: "References", href: "/go/references" },
			]}
		/>
	);
}
