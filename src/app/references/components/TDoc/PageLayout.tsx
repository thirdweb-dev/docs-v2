import { notFound } from "next/navigation";
import type { TransformedDoc } from "typedoc-better-json";
import { RootTDoc } from "./Root";
import { getSlugToDocMap, fetchAllSlugs } from "./utils/slugs";
import type { Metadata } from "next";
import { DocLayout } from "@/components/Layouts/DocLayout";
import { getSidebarLinkGroups } from "./utils/getSidebarLinkgroups";
import { Breadcrumb } from "@/components/Document/Breadcrumb";
import { Details, DocLink, Heading } from "@/components/Document";
import { LinkGroup, LinkMeta } from "@/components/others/Sidebar";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import GithubSlugger from "github-slugger";

type PageProps = { params: { slug?: [docName: string] } };

export function getTDocPage(options: {
	getDoc: () => Promise<TransformedDoc>;
	sdkTitle: string;
	packageSlug: string;
}) {
	const { getDoc, sdkTitle, packageSlug } = options;

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
				<IndexContent doc={doc} packageSlug={packageSlug} sdkTitle={sdkTitle} />
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

async function IndexContent(props: {
	doc: TransformedDoc;
	packageSlug: string;
	sdkTitle: string;
}) {
	const linkGroups = getSidebarLinkGroups(
		props.doc,
		`/references/${props.packageSlug}`,
	);

	const slugger = new GithubSlugger();
	sluggerContext.set(slugger);

	return (
		<div>
			<Heading id="reference" level={1}>
				{props.sdkTitle} Reference
			</Heading>

			{linkGroups.map((linkGroup) => (
				<div key={linkGroup.name}>
					<Heading level={2} id={slugger.slug(linkGroup.name)}>
						{linkGroup.name}
					</Heading>
					<RenderLinkGroup linkGroup={linkGroup} />
				</div>
			))}
		</div>
	);
}

function RenderLinkGroup(props: { linkGroup: LinkGroup }) {
	const ungroupedLinks = props.linkGroup.links.filter(
		(link) => !("links" in link) && "href" in link,
	) as LinkMeta[];

	const slugger = sluggerContext.get();
	invariant(slugger, "slugger is not defined");

	const allChildrenAreLinks =
		ungroupedLinks.length === props.linkGroup.links.length;

	// display links as a grid
	if (allChildrenAreLinks) {
		return (
			<div>
				<LinkGrid links={props.linkGroup.links as LinkMeta[]} />
			</div>
		);
	}

	// display links as a list
	return (
		<div>
			{props.linkGroup.links.map((link, i) => {
				if ("links" in link) {
					return (
						<Details
							id={slugger.slug(props.linkGroup.name + "-" + link.name)}
							summary={link.name}
							key={i}
						>
							<RenderLinkGroup linkGroup={link} />
						</Details>
					);
				}
			})}

			{ungroupedLinks.length > 0 && (
				<Details
					id={slugger.slug(props.linkGroup.name + "-" + "others")}
					summary="Others"
				>
					<RenderLinkGroup
						linkGroup={{
							links: ungroupedLinks,
							name: "Others",
							expanded: true,
						}}
					/>
				</Details>
			)}
		</div>
	);
}

function LinkGrid(props: { links: LinkMeta[] }) {
	return (
		<div className="grid gap-2 md:grid-cols-2  xl:grid-cols-3">
			{props.links.map((_link, i) => {
				const link = _link as LinkMeta;

				return (
					<DocLink
						key={i}
						href={link.href}
						className="overflow-hidden text-ellipsis rounded-lg border bg-b-800 p-3 text-sm text-accent-500"
					>
						{link.name}
					</DocLink>
				);
			})}
		</div>
	);
}
