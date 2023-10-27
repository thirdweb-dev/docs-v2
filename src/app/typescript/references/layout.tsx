import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { fetchTSDoc } from "./[[...slug]]/utils/fetchTSDoc";
import { getSidebarLinkGroups } from "../../../components/RenderDoc/getSidebarLinkgroups";

type PageProps = {
	children: React.ReactNode;
};

export default async function Layout(props: PageProps) {
	const doc = await fetchTSDoc();

	const breadcrumb = [
		{ name: "TypeScript SDK", href: "/typescript" },
		{ name: "References", href: "/typescript/references" },
	];

	return (
		<ReferenceLayout
			sideBar={{
				name: "TypeScript SDK",
				linkGroups: getSidebarLinkGroups(doc, "/typescript/references"),
			}}
			breadcrumb={breadcrumb}
		>
			{props.children}
		</ReferenceLayout>
	);
}
