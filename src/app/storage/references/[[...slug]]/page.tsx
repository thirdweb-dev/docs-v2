import { notFound } from "next/navigation";
import { RenderDoc } from "@/components/RenderDoc/RenderDoc";
import { Metadata } from "next";
import {
	fetchAllSlugs,
	getSlugToDocMap,
} from "../../../../components/RenderDoc/slugs";
import Content from "./content.mdx";
import { fetchStorageDoc } from "../fetchStorageDoc";

export const dynamicParams = false;

type PageProps = { params: { slug?: [docName: string] } };

export default async function Page(props: PageProps) {
	const doc = await fetchStorageDoc();
	const slugToDoc = getSlugToDocMap(doc);
	const docName = props.params.slug ? props.params.slug[0] : undefined;

	if (docName) {
		const selectedDoc = docName && slugToDoc[docName];

		if (!selectedDoc) {
			notFound();
		}

		return <RenderDoc doc={selectedDoc} />;
	}

	return <Content />;
}

export async function generateStaticParams() {
	const doc = await fetchStorageDoc();
	const slugs = fetchAllSlugs(doc);

	return [
		...slugs.map((slug) => ({
			slug: [slug],
		})),
		{
			slug: undefined,
		},
	];
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const doc = await fetchStorageDoc();
	const docName = props.params.slug ? props.params.slug[0] : undefined;
	const slugToDoc = getSlugToDocMap(doc);

	if (!docName) {
		return {
			title: `Storage SDK | thirdweb docs`,
		};
	}

	const selectedDoc = docName && slugToDoc[docName];

	if (!selectedDoc) {
		notFound();
	}

	return {
		title: `${selectedDoc.name} - Storage SDK`,
	};
}
