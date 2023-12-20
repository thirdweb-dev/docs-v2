import { notFound } from "next/navigation";
import { Metadata } from "next";
import Content from "../content.mdx";
import { Breadcrumb } from "@/components/Document";
import { RootNDoc } from "@/app/references/components/NDoc/Root";
import { sluggerContext } from "@/contexts/slugger";
import GihubSlugger from "github-slugger";
import {
	getAllNDocSlugs,
	getSlugToNDocMap,
} from "@/app/references/components/NDoc/utils";
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
			<div>
				<Breadcrumb
					crumbs={[
						{ name: "Go SDK", href: `/go` },
						{ name: "References", href: `/references/go` },
					]}
				/>
				<div className="h-6"></div>
				<Content />
			</div>
		);
	} else {
		const selectedDoc = slugToDocmap.get(docName);

		if (!selectedDoc) {
			notFound();
		}

		return (
			<div>
				<Breadcrumb
					crumbs={[
						{ name: "Go SDK", href: `/go` },
						{ name: "References", href: `/references/go` },
						{
							name: selectedDoc.name,
							href: `/references/go/${selectedDoc.name}`,
						},
					]}
				/>
				<div className="h-6"></div>
				<RootNDoc lang="go" doc={selectedDoc} />
			</div>
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
