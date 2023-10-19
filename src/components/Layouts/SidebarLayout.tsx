import clsx from "clsx";
import React from "react";

export function SidebarLayout(props: {
	sideBar: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className={"container relative flex grow gap-6"}>
			{/* Left */}
			<aside
				className={clsx(
					"sticky top-header-height h-sidebar-height w-[280px] shrink-0 flex-col overflow-y-hidden",
					"hidden md:flex",
				)}
			>
				{props.sideBar}
			</aside>

			<main className="relative w-full max-w-6xl overflow-hidden pt-6">
				{props.children}
			</main>

			{/* Right - only for xl */}
			<div className="hidden w-64 shrink-0 xl:block"></div>
		</div>
	);
}
