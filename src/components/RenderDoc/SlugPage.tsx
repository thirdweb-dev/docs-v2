import { linkMapContext } from "@/contexts/linkMap";
import { notFound } from "next/navigation";
import type { TransformedDoc } from "typedoc-better-json";
import { RenderDoc } from "./RenderDoc";
import { getSlugToDocMap, getLinkMap, fetchAllSlugs } from "./slugs";
import type { Metadata } from "next";
import { ReferenceLayout } from "../Layouts/ReferenceLayout";
import { getSidebarLinkGroups } from "./getSidebarLinkgroups";
import { getTableOfContent } from "./getTableOfContent";
import { TableOfContentsSideBar } from "../Layouts/TableContentLayout";
import { Breadcrumb } from "../ui/Breadcrumb";

type PageProps = { params: { slug?: [docName: string] } };

export function getTypedocPage(options: {
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

			const linkMap = getLinkMap(doc, `/${packageSlug}/references`);
			linkMap.delete(docSlug); // remove current doc's link
			linkMapContext.set(linkMap);

			return (
				<>
					<main className="relative w-full overflow-hidden pt-6">
						<Breadcrumb
							crumbs={[
								{ name: sdkTitle, href: `/${packageSlug}` },
								{ name: "References", href: `/${packageSlug}/references` },
								{
									name: selectedDoc.name,
									href: `/${packageSlug}/references/${selectedDoc.name}`,
								},
							]}
						/>
						<div className="h-6"></div>
						<RenderDoc doc={selectedDoc} />
					</main>
					<TableOfContentsSideBar nodes={getTableOfContent(selectedDoc)} />
				</>
			);
		}

		return (
			<>
				<div className="w-full overflow-hidden pt-6">{indexContent}</div>
				<TableOfContentsSideBar nodes={[]} />
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
			>
				{props.children}
			</ReferenceLayout>
		);
	};
}
