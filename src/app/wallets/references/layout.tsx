import { ReferenceLayout } from "@/components/Reference/ReferenceLayout";
import { fetchWalletsDoc } from "./fetchWalletsDoc";
import { getSidebarLinkGroups } from "../../../components/RenderDoc/getSidebarLinkgroups";

type PageProps = {
	children: React.ReactNode;
};

export default async function Layout(props: PageProps) {
	const doc = await fetchWalletsDoc();

	const breadcrumb = [
		{ name: "Wallets SDK", href: "/wallets" },
		{ name: "References", href: "/wallets/references" },
	];

	return (
		<ReferenceLayout
			sideBar={{
				name: "Wallets SDK",
				linkGroups: getSidebarLinkGroups(doc, "/wallets/references"),
			}}
			breadcrumb={breadcrumb}
		>
			{props.children}
		</ReferenceLayout>
	);
}
