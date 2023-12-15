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
	editPageButton?: true;
};

export function DocLayout(props: DocLayoutProps) {
	return (
		<div
			className={
				"container relative flex flex-col gap-6 xl:grid xl:grid-cols-[300px_750px_1fr]"
			}
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
			<div className="sticky top-header-height z-50 border-b bg-b-900 py-4 xl:hidden">
				<DocSidebarMobile {...props.sideBar} />
			</div>
			<main className="relative flex w-full flex-col overflow-hidden">
				<div className="grow xl:mt-6">{props.children}</div>
				<div className="mt-16 xl:mt-20">
					<PageFooter editPageButton={props.editPageButton} />
				</div>
			</main>
			<TableOfContentsSideBar />
		</div>
	);
}
