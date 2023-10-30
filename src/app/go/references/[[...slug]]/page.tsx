import { notFound } from "next/navigation";
import { Metadata } from "next";
import Content from "../content.mdx";
import { TableOfContentsSideBar } from "@/components/others/TableOfContents";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RenderNDoc } from "@/components/NonTypeDoc/RenderNDoc";
import { sluggerContext } from "@/contexts/slugger";
import GihubSlugger from "github-slugger";
import {
	getAllNDocSlugs,
	getSlugToNDocMap,
} from "@/components/NonTypeDoc/utils";
import { fetchGoDoc } from "../goDoc";

export const dynamicParams = false;

type PageProps = { params: { slug?: [docName: string] } };

export default async function Page(props: PageProps) {
	const goDoc = await fetchGoDoc();
	const slugToDocmap = getSlugToNDocMap(goDoc);
	const docName = props.params.slug?.[0];

	sluggerContext.set(new GihubSlugger());

	if (!docName) {
		return (
			<>
				<main className="w-full overflow-hidden pt-6">
					<Breadcrumb
						crumbs={[
							{ name: "Go SDK", href: `/go` },
							{ name: "References", href: `/go/references` },
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
							{ name: "Go SDK", href: `/go` },
							{ name: "References", href: `/go/references` },
							{
								name: selectedDoc.name,
								href: `/go/references/${selectedDoc.name}`,
							},
						]}
					/>
					<div className="h-6"></div>
					<RenderNDoc lang="go" doc={selectedDoc} />
				</main>
				<TableOfContentsSideBar />
			</>
		);
	}
}

export async function generateStaticParams() {
	const goDoc = await fetchGoDoc();
	const slugs = getAllNDocSlugs(goDoc);

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
	const goDoc = await fetchGoDoc();
	const slugToDocMap = getSlugToNDocMap(goDoc);
	const docName = props.params.slug?.[0];

	const genericDescription = "Go SDK | thirdweb";
	const genericTitle = "Go SDK | thirdweb docs";

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
