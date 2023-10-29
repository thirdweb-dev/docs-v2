import clsx from "clsx";
import React from "react";
import { TableOfContentNode } from "./TableContentLayout";

export function SidebarLayout(props: {
	sideBar: React.ReactNode;
	children: React.ReactNode;
	tableOfContents?: TableOfContentNode[];
}) {
	return (
		<>
			<div
				className={"container relative flex grow flex-col gap-6 lg:flex-row"}
			>
				<aside
					className={clsx(
						"sticky top-header-height h-sidebar-height w-72 shrink-0 flex-col overflow-y-hidden",
						"hidden lg:flex",
					)}
				>
					{props.sideBar}
				</aside>
				{props.children}
			</div>
		</>
	);
}
