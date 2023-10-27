import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { getSidebarLinkGroups } from "../../../components/RenderDoc/getSidebarLinkgroups";
import { fetchStorageDoc } from "./fetchStorageDoc";

type PageProps = {
	children: React.ReactNode;
};

export default async function Layout(props: PageProps) {
	const doc = await fetchStorageDoc();

	const breadcrumb = [
		{ name: "Storage SDK", href: "/storage" },
		{ name: "References", href: "/storage/references" },
	];

	return (
		<ReferenceLayout
			sideBar={{
				name: "Storage SDK",
				linkGroups: getSidebarLinkGroups(doc, "/storage/references"),
			}}
			breadcrumb={breadcrumb}
		>
			{props.children}
		</ReferenceLayout>
	);
}
