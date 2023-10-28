import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { Metadata } from "next";
import { fetchPythonReference } from "./fetchPythonReference";
import Content from "./content.mdx";
import { getSidebarLinkGroups } from "./getSidebarLinkGroups";

export const metadata: Metadata = {
	title: "Python SDK | thirdweb docs",
	description: "Python SDK | thirdweb docs",
};

export default async function Page() {
	const ref = await fetchPythonReference();

	return (
		<ReferenceLayout
			sideBar={{
				name: "Python SDK",
				linkGroups: getSidebarLinkGroups(ref),
			}}
			breadcrumb={[
				{ name: "Python", href: "/python" },
				{ name: "References", href: "/python/references" },
			]}
		>
			<Content />
		</ReferenceLayout>
	);
}
