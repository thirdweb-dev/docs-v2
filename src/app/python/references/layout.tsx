import { DocLayout } from "@/components/Layouts/DocLayout";
import { linkMapContext } from "@/contexts/linkMap";
import { fetchPythonNDoc } from "./pythonDoc";
import { getNLinkGroups, getNLinkMap } from "@/components/NonTypeDoc/utils";

export default async function Layout(props: { children: React.ReactNode }) {
	const pythonDoc = await fetchPythonNDoc();

	if (!linkMapContext.get()) {
		const linkMap = getNLinkMap(pythonDoc, `/python/references`);
		linkMapContext.set(linkMap);
	}

	return (
		<DocLayout
			sideBar={{
				name: "Python SDK",
				linkGroups: getNLinkGroups(pythonDoc, `/python/references`),
			}}
		>
			{props.children}
		</DocLayout>
	);
}
