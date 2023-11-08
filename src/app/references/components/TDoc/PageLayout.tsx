import { linkMapContext } from "@/contexts/linkMap";
import { notFound } from "next/navigation";
import type { TransformedDoc } from "typedoc-better-json";
import { RootTDoc } from "./Root";
import { getSlugToDocMap, getLinkMap, fetchAllSlugs } from "./utils/slugs";
import type { Metadata } from "next";
import { DocLayout } from "../../../../components/Layouts/DocLayout";
import { getSidebarLinkGroups } from "./utils/getSidebarLinkgroups";
import { TableOfContentsSideBar } from "../../../../components/others/TableOfContents";
import { Breadcrumb } from "../../../../components/ui/Breadcrumb";

type PageProps = { params: { slug?: [docName: string] } };

export function getTDocPage(options: {
	getDoc: () => Promise<TransformedDoc>;
	indexContent: React.ReactNode;
	sdkTitle: string;
	packageSlug: string;
}) {
	const { getDoc, indexContent, sdkTitle, packageSlug } = options;

	async function Page(props: PageProps) {
		const doc = await getDoc();
		const slugToDoc = getSlugToDocMap(doc);
		const docSlug = props.params.slug ? props.params.slug[0] : undefined;

		if (docSlug) {
			const selectedDoc = docSlug && slugToDoc[docSlug];

			if (!selectedDoc) {
				notFound();
			}

			const linkMap = getLinkMap(doc, `/references/${packageSlug}`);
			linkMap.delete(docSlug); // remove current doc's link
			linkMapContext.set(linkMap);

			return (
				<>
					<main className="relative w-full overflow-hidden pb-10 pt-6">
						<Breadcrumb
							crumbs={[
								{ name: sdkTitle, href: `/${packageSlug}` },
								{ name: "References", href: `/references/${packageSlug}` },
								{
									name: selectedDoc.name,
									href: `/references/${packageSlug}/${selectedDoc.name}`,
								},
							]}
						/>
						<div className="h-6"></div>
						<RootTDoc doc={selectedDoc} />
					</main>
					<TableOfContentsSideBar />
				</>
			);
		}

		return (
			<>
				<main className="w-full overflow-hidden pt-6">
					<Breadcrumb
						crumbs={[
							{ name: sdkTitle, href: `/${packageSlug}` },
							{ name: "References", href: `/references/${packageSlug}` },
						]}
					/>
					<div className="h-6"></div>
					{indexContent}
				</main>
				<TableOfContentsSideBar />
			</>
		);
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

export function getTDocLayout(options: {
	getDoc: () => Promise<TransformedDoc>;
	packageSlug: string;
	sdkTitle: string;
}) {
	const { getDoc, packageSlug, sdkTitle } = options;

	return async function Layout(props: { children: React.ReactNode }) {
		const doc = await getDoc();

		if (!linkMapContext.get()) {
			const linkMap = getLinkMap(doc, `/references/${packageSlug}`);
			linkMapContext.set(linkMap);
		}

		return (
			<DocLayout
				sideBar={{
					name: sdkTitle,
					links: getSidebarLinkGroups(doc, `/references/${packageSlug}`),
				}}
			>
				{props.children}
			</DocLayout>
		);
	};
}
