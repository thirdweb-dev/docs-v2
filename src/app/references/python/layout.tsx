import { DocLayout } from "@/components/Layouts/DocLayout";
import { linkMapContext } from "@/contexts/linkMap";
import { fetchPythonNDoc } from "./pythonDoc";
import {
	getNLinkGroups,
	getNLinkMap,
} from "@/app/references/components/NDoc/utils";

export default async function Layout(props: { children: React.ReactNode }) {
	const pythonDoc = await fetchPythonNDoc();

	if (!linkMapContext.get()) {
		const linkMap = getNLinkMap(pythonDoc, `/references/python`);
		linkMapContext.set(linkMap);
	}

	return (
		<DocLayout
			sideBar={{
				name: "Python SDK",
				links: getNLinkGroups(pythonDoc, `/references/python`),
			}}
		>
			{props.children}
		</DocLayout>
	);
}
