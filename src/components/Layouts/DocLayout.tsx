import clsx from "clsx";
import { DocSidebarMobile, DocSidebar, SidebarLink } from "../others/Sidebar";
import { TableOfContentsSideBar } from "../others/TableOfContents";
import { PageFooter } from "../Document/PageFooter";

export type SideBar = {
	name: string;
	links: SidebarLink[];
};

export type DocLayoutProps = {
	sideBar: SideBar;
	children?: React.ReactNode;
};

export function DocLayout(props: DocLayoutProps) {
	return (
		<div
			className={"container relative grid gap-6 xl:grid-cols-[300px_750px_1fr]"}
			style={{
				minHeight: "calc(100vh - var(--header-height))",
			}}
		>
			<aside
				className={clsx(
					"sticky top-header-height h-sidebar-height flex-col overflow-y-hidden",
					"hidden xl:flex",
				)}
			>
				<DocSidebar {...props.sideBar} />
			</aside>
			<main className="relative flex w-full flex-col overflow-hidden">
				<div className="mb-6">
					<DocSidebarMobile {...props.sideBar} />
				</div>
				<div className="grow">{props.children}</div>
				<div className="mt-16 xl:mt-24">
					<PageFooter />
				</div>
			</main>
			<TableOfContentsSideBar />
		</div>
	);
}
