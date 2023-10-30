import { LinkMeta, DocSidebarMobile, DocSidebar } from "../others/Sidebar";
import { SidebarLayout } from "./SidebarLayout";

export type DocLayoutProps = {
	sideBar: {
		name: string;
		linkGroups: Array<{
			group: string;
			links: LinkMeta[];
		}>;
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
