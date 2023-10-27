import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { getSidebarLinkGroups } from "../../../components/RenderDoc/getSidebarLinkgroups";
import { fetchReactDoc } from "./[[...slug]]/fetchReactDoc";

type PageProps = {
	children: React.ReactNode;
};

export default async function Layout(props: PageProps) {
	const doc = await fetchReactDoc();

	const breadcrumb = [
		{ name: "React SDK", href: "/react" },
		{ name: "References", href: "/react/references" },
	];

	return (
		<ReferenceLayout
			sideBar={{
				name: "React SDK",
				linkGroups: getSidebarLinkGroups(doc, "/react/references"),
			}}
			breadcrumb={breadcrumb}
		>
			{props.children}
		</ReferenceLayout>
	);
}
