import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { getSidebarLinkGroups } from "@/components/RenderDoc/getSidebarLinkgroups";
import { fetchReactNativeDoc } from "./fetchReactNativeDoc";

type PageProps = {
	children: React.ReactNode;
};

export default async function Layout(props: PageProps) {
	const doc = await fetchReactNativeDoc();

	const breadcrumb = [
		{ name: "React Native SDK", href: "/react-native" },
		{ name: "References", href: "/react-native/references" },
	];

	return (
		<ReferenceLayout
			sideBar={{
				name: "React Native SDK",
				linkGroups: getSidebarLinkGroups(doc, "/react-native/references"),
			}}
			breadcrumb={breadcrumb}
		>
			{props.children}
		</ReferenceLayout>
	);
}
