import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchPythonNDoc } from "../pythonDoc";
import Content from "../content.mdx";
import { TableOfContentsSideBar } from "@/components/others/TableOfContents";
import { Breadcrumb } from "@/components/Document";
import { RootNDoc } from "@/app/references/components/NDoc/Root";
import { sluggerContext } from "@/contexts/slugger";
import GihubSlugger from "github-slugger";
import {
	getAllNDocSlugs,
	getSlugToNDocMap,
} from "@/app/references/components/NDoc/utils";

export const dynamicParams = false;

type PageProps = { params: { slug?: [docName: string] } };

export default async function Page(props: PageProps) {
	const pythonDoc = await fetchPythonNDoc();
	const slugToDocmap = getSlugToNDocMap(pythonDoc);
	const docName = props.params.slug?.[0];

	sluggerContext.set(new GihubSlugger());

	if (!docName) {
		return (
			<>
				<main className="w-full overflow-hidden pt-6">
					<Breadcrumb
						crumbs={[
							{ name: "Python SDK", href: `/python` },
							{ name: "References", href: `/references/python` },
						]}
					/>
					<div className="h-6"></div>
					<Content />
				</main>
				<TableOfContentsSideBar />
			</>
		);
	} else {
		const selectedDoc = slugToDocmap.get(docName);

		if (!selectedDoc) {
			notFound();
		}

		return (
			<>
				<main className="w-full overflow-hidden pt-6">
					<Breadcrumb
						crumbs={[
							{ name: "Python SDK", href: `/python` },
							{ name: "References", href: `/references/python` },
							{
								name: selectedDoc.name,
								href: `/references/python/${selectedDoc.name}`,
							},
						]}
					/>
					<div className="h-6"></div>
					<RootNDoc lang="python" doc={selectedDoc} />
				</main>
				<TableOfContentsSideBar />
			</>
		);
	}
}

export async function generateStaticParams() {
	const pythonDoc = await fetchPythonNDoc();
	const slugs = getAllNDocSlugs(pythonDoc);

	return [
		...slugs.map((s) => {
			return {
				slug: [s],
			};
		}),
		{
			slug: undefined,
		},
	];
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const pythonDoc = await fetchPythonNDoc();
	const slugToDocMap = getSlugToNDocMap(pythonDoc);
	const docName = props.params.slug?.[0];

	const genericDescription = "Python SDK | thirdweb";
	const genericTitle = "Python SDK | thirdweb docs";

	if (!docName) {
		return {
			title: genericTitle,
			description: genericDescription,
		};
	}

	const selectedDoc = slugToDocMap.get(docName);

	if (!selectedDoc) {
		notFound();
	}

	return {
		title: `${docName} - ${genericTitle}`,
		description: selectedDoc.description || genericDescription,
	};
}
