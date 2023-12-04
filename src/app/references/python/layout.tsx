import { DocLayout } from "@/components/Layouts/DocLayout";
import { fetchPythonNDoc } from "./pythonDoc";
import { getNLinkGroups } from "@/app/references/components/NDoc/utils";

export default async function Layout(props: { children: React.ReactNode }) {
	const pythonDoc = await fetchPythonNDoc();

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
