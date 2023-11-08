import { DocLayout } from "@/components/Layouts/DocLayout";
import { linkMapContext } from "@/contexts/linkMap";
import {
	getNLinkGroups,
	getNLinkMap,
} from "@/app/references/components/NDoc/utils";
import { fetchGoDoc } from "./goDoc";

export default async function Layout(props: { children: React.ReactNode }) {
	const goDoc = await fetchGoDoc();

	if (!linkMapContext.get()) {
		const linkMap = getNLinkMap(goDoc, `/references/go`);
		linkMapContext.set(linkMap);
	}

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
