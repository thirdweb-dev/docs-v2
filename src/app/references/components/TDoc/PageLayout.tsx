import { notFound } from "next/navigation";
import type { TransformedDoc } from "typedoc-better-json";
import { RootTDoc } from "./Root";
import { getSlugToDocMap, fetchAllSlugs } from "./utils/slugs";
import type { Metadata } from "next";
import { DocLayout } from "@/components/Layouts/DocLayout";
import { getSidebarLinkGroups } from "./utils/getSidebarLinkgroups";
import { Breadcrumb } from "@/components/Document/Breadcrumb";
import {
	Details,
	DocLink,
	Heading,
	createMetadata,
} from "@/components/Document";
import { LinkGroup, LinkMeta } from "@/components/others/Sidebar";
import { sluggerContext } from "@/contexts/slugger";
import invariant from "tiny-invariant";
import GithubSlugger from "github-slugger";
import { MetadataImageIcon } from "../../../../components/Document/metadata";

type PageProps = { params: { version: string; slug?: string[] } };
type LayoutProps = { params: { version: string }; children: React.ReactNode };

// make sure getTDocPage() is used in .../[version]/[...slug]/page.tsx file
export function getTDocPage(options: {
	getDoc: (version: string) => Promise<TransformedDoc>;
	sdkTitle: string;
	packageSlug: string;
	getVersions: () => Promise<string[]>;
	metadataIcon: MetadataImageIcon;
}) {
	const { getDoc, sdkTitle, packageSlug, getVersions, metadataIcon } = options;

	async function Page(props: PageProps) {
		const version = props.params.version;
		const doc = await getDoc(version);
		const slugToDoc = getSlugToDocMap(doc);
		const docSlug = props.params.slug?.join("/");

		if (!version) {
			notFound();
		}

		// API page
		if (docSlug) {
			const selectedDoc = docSlug && slugToDoc[docSlug];

			if (!selectedDoc) {
				notFound();
			}

			return (
				<div>
					<Breadcrumb
						crumbs={[
							{
								name: "References",
								href: `/references/${packageSlug}/${version}`,
							},
							{
								name: selectedDoc.name,
								href: `/references/${packageSlug}/${version}/${selectedDoc.name}`,
							},
						]}
					/>
					<RootTDoc doc={selectedDoc} />
				</div>
			);
		}

		// index page
		return (
			<div>
				<IndexContent
					doc={doc}
					packageSlug={packageSlug}
					sdkTitle={sdkTitle}
					version={version}
				/>
			</div>
		);
	}

	// statically generate pages for latest version
	async function generateStaticParams(): Promise<PageProps["params"][]> {
		const versions = await getVersions();

		const returnVal = await Promise.all(
			versions.map((version) => {
				return getDoc(version)
					.then((doc) => fetchAllSlugs(doc))
					.then((slugs) => {
						return [
							...slugs.map((slug) => {
								return {
									slug: slug.split("/") as string[],
									version: version,
								};
							}),
							{ version, slug: [] },
						];
					});
			}),
		);

		return returnVal.flat();
	}

	async function generateMetadata(props: PageProps): Promise<Metadata> {
		let docName = props.params.slug ? props.params.slug[0] : undefined;

		if (!docName) {
			return {
				title: sdkTitle + " | thirdweb docs",
			};
		}
		const extensionName = props.params.slug ? props.params.slug[1] : undefined;
		if (extensionName) {
			docName = `${extensionName} - ${docName}`;
		}

		return createMetadata({
			title: `${docName} - ${sdkTitle}`,
			description: `${docName} API Reference - ${sdkTitle}`,
			image: {
				title: docName,
				icon: metadataIcon,
			},
		});
	}

	return {
		dynamicParams: false,
		default: Page,
		generateStaticParams,
		generateMetadata,
	};
}

// make sure getTDocLayout() is used in .../[version]/layout.tsx file
export function getTDocLayout(options: {
	getDoc: (version: string) => Promise<TransformedDoc>;
	packageSlug: string;
	sdkTitle: string;
}) {
	const { getDoc, packageSlug, sdkTitle } = options;

	return async function Layout(props: LayoutProps) {
		const { version } = props.params;
		const doc = await getDoc(version);

		return (
			<DocLayout
				sideBar={{
					name: sdkTitle,
					links: getSidebarLinkGroups(
						doc,
						`/references/${packageSlug}/${version}`,
					),
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
	version: string;
}) {
	const linkGroups = getSidebarLinkGroups(
		props.doc,
		`/references/${props.packageSlug}/${props.version}`,
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
		<div className="flex flex-wrap gap-3">
			{props.links.map((_link, i) => {
				const link = _link as LinkMeta;

				return (
					<DocLink
						key={i}
						href={link.href}
						className="overflow-hidden text-ellipsis rounded-lg border-2 bg-b-900 px-3 py-2 text-f-200 hover:border-accent-500 hover:bg-accent-900"
					>
						{link.name}
					</DocLink>
				);
			})}
		</div>
	);
}
