import { DocLayout } from "@/components/Layouts/DocLayout";
import { getNLinkGroups } from "@/app/references/components/NDoc/utils";
import { fetchGoDoc } from "./goDoc";

export default async function Layout(props: { children: React.ReactNode }) {
	const goDoc = await fetchGoDoc();

	return (
		<DocLayout
			sideBar={{
				name: "Python SDK",
				links: getNLinkGroups(goDoc, `/references/go`),
			}}
		>
			{props.children}
		</DocLayout>
	);
}
