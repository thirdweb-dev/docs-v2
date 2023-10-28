import { linkMapContext } from "@/contexts/linkMap";
import { notFound } from "next/navigation";
import type { TransformedDoc } from "typedoc-better-json";
import { RenderDoc } from "./RenderDoc";
import { getSlugToDocMap, getLinkMap, fetchAllSlugs } from "./slugs";
import type { Metadata } from "next";
import { ReferenceLayout } from "../Layouts/ReferenceLayout";
import { getSidebarLinkGroups } from "./getSidebarLinkgroups";

type PageProps = { params: { slug?: [docName: string] } };

export function getTypedocPage(options: {
	getDoc: () => Promise<TransformedDoc>;
	path: string;
	indexContent: React.ReactNode;
	sdkTitle: string;
}) {
	const { getDoc, path, indexContent, sdkTitle } = options;

	async function Page(props: PageProps) {
		const doc = await getDoc();
		const slugToDoc = getSlugToDocMap(doc);
		const docSlug = props.params.slug ? props.params.slug[0] : undefined;

		if (docSlug) {
			const selectedDoc = docSlug && slugToDoc[docSlug];

			if (!selectedDoc) {
				notFound();
			}

			const linkMap = getLinkMap(doc, path);
			linkMap.delete(docSlug); // remove current doc's link
			linkMapContext.set(linkMap);

			return <RenderDoc doc={selectedDoc} />;
		}

		return <>{indexContent}</>;
	}

	async function generateStaticParams() {
		const slugs = fetchAllSlugs(await getDoc());

		return [
			...slugs.map((slug) => ({
				slug: [slug],
			})),
			{
				slug: undefined,
			},
		];
	}

	async function generateMetadata(props: PageProps): Promise<Metadata> {
		const docName = props.params.slug ? props.params.slug[0] : undefined;
		const doc = await getDoc();
		const slugToDoc = getSlugToDocMap(doc);

		if (!docName) {
			return {
				title: sdkTitle + " | thirdweb docs",
			};
		}

		const selectedDoc = docName && slugToDoc[docName];

		if (!selectedDoc) {
			notFound();
		}

		return {
			title: `${selectedDoc.name} - ${sdkTitle}`,
		};
	}

	return {
		dynamicParams: false,
		default: Page,
		generateStaticParams,
		generateMetadata,
	};
}

export function getTypedocLayout(options: {
	getDoc: () => Promise<TransformedDoc>;
	packageSlug: string;
	sdkTitle: string;
}) {
	const { getDoc, packageSlug, sdkTitle } = options;

	return async function Layout(props: { children: React.ReactNode }) {
		const doc = await getDoc();

		if (!linkMapContext.get()) {
			const linkMap = getLinkMap(doc, "/typescript/references");
			linkMapContext.set(linkMap);
		}

		return (
			<ReferenceLayout
				sideBar={{
					name: sdkTitle,
					linkGroups: getSidebarLinkGroups(doc, `/${packageSlug}/references`),
				}}
				breadcrumb={[
					{ name: sdkTitle, href: `/${packageSlug}` },
					{ name: "References", href: `/${packageSlug}/references` },
				]}
			>
				{props.children}
			</ReferenceLayout>
		);
	};
}
