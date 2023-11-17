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
			className={
				"container relative grid gap-6  lg:grid-cols-[1.2fr_750px_1fr]"
			}
		>
			<aside
				className={clsx(
					"sticky top-header-height h-sidebar-height flex-col overflow-y-hidden",
					"hidden lg:flex",
				)}
			>
				<DocSidebar {...props.sideBar} />
			</aside>
			<DocSidebarMobile {...props.sideBar} />
			<main className="relative max-w-3xl overflow-hidden pt-6">
				{props.children}
				<div className="pt-10">
					<PageFooter />
				</div>
			</main>
			<TableOfContentsSideBar />
		</div>
	);
}
