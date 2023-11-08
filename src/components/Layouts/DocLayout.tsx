import { DocSidebarMobile, DocSidebar, SidebarLink } from "../others/Sidebar";
import { SidebarLayout } from "./SidebarLayout";

export type DocLayoutProps = {
	sideBar: {
		name: string;
		links: SidebarLink[];
	};
	children?: React.ReactNode;
};

export function DocLayout(props: DocLayoutProps) {
	return (
		<SidebarLayout sideBar={<DocSidebar {...props.sideBar} />}>
			<DocSidebarMobile {...props.sideBar} />
			{props.children}
		</SidebarLayout>
	);
}
