import { notFound } from "next/navigation";
import type { TransformedDoc } from "typedoc-better-json";
import { RootTDoc } from "./Root";
import { getSlugToDocMap, fetchAllSlugs } from "./utils/slugs";
import type { Metadata } from "next";
import { DocLayout } from "@/components/Layouts/DocLayout";
import { getSidebarLinkGroups } from "./utils/getSidebarLinkgroups";
import { Breadcrumb } from "@/components/Document/Breadcrumb";

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

			return (
				<div>
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
					<RootTDoc doc={selectedDoc} />
				</div>
			);
		}

		return (
			<div>
				<Breadcrumb
					crumbs={[
						{ name: sdkTitle, href: `/${packageSlug}` },
						{ name: "References", href: `/references/${packageSlug}` },
					]}
				/>
				{indexContent}
			</div>
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
