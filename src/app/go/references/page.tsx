import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { Metadata } from "next";
import { fetchGoReference } from "./fetchGoReference";
import Content from "./content.mdx";
import { getSidebarLinkGroups } from "./getSidebarLinkGroups";

export const metadata: Metadata = {
	title: "Go SDK | thirdweb docs",
	description: "Go SDK | thirdweb docs",
};

export default async function Page() {
	const goReference = await fetchGoReference();

	return (
		<ReferenceLayout
			sideBar={{
				name: "Go SDK",
				linkGroups: getSidebarLinkGroups(goReference),
			}}
			breadcrumb={[
				{ name: "Go", href: "/go" },
				{ name: "References", href: "/go/references" },
			]}
		>
			<Content />
		</ReferenceLayout>
	);
}
