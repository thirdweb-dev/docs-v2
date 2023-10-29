import Link from "next/link";
import { cn } from "@/lib/utils";

export type TableOfContentNode = {
	name: string;
	href: string;
	children?: TableOfContentNode[];
};

export function TableOfContentsSideBar(props: { nodes: TableOfContentNode[] }) {
	return (
		<nav
			className={cn(
				"hidden w-64 shrink-0 pt-8 xl:block text-sm",
				"sticky top-header-height h-sidebar-height flex-col overflow-y-hidden",
			)}
		>
			<div className="mb-5 font-semibold ">On this page</div>
			<TableOfContents nodes={props.nodes} />
		</nav>
	);
}

export function TableOfContents(props: { nodes: TableOfContentNode[] }) {
	return (
		<ul className="my-4 flex flex-col gap-3">
			{props.nodes.map((node) => {
				if (node.children) {
					return (
						<li key={node.name}>
							<Link className="text-f-300 hover:text-f-100" href={node.href}>
								{node.name}
							</Link>
							<div className="pl-4">
								<TableOfContents nodes={node.children} key={node.href} />
							</div>
						</li>
					);
				}

				return (
					<li key={node.href}>
						<Link className="text-f-300 hover:text-f-100" href={node.href}>
							{node.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
