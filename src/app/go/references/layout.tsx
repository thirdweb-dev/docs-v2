import { DocLayout } from "@/components/Layouts/DocLayout";
import { linkMapContext } from "@/contexts/linkMap";
import { getNLinkGroups, getNLinkMap } from "@/components/NonTypeDoc/utils";
import { fetchGoDoc } from "./goDoc";

export default async function Layout(props: { children: React.ReactNode }) {
	const goDoc = await fetchGoDoc();

	if (!linkMapContext.get()) {
		const linkMap = getNLinkMap(goDoc, `/go/references`);
		linkMapContext.set(linkMap);
	}

	return (
		<DocLayout
			sideBar={{
				name: "Python SDK",
				linkGroups: getNLinkGroups(goDoc, `/go/references`),
			}}
		>
			{props.children}
		</DocLayout>
	);
}
