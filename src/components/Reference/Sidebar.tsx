import Link from "next/link";
import type { SideBarLink } from "./types";
import clsx from "clsx";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function ReferenceSideBar(props: {
	links: {
		classes?: SideBarLink[];
		functions?: SideBarLink[];
	};
	activeLink?: string;
	name: string;
}) {
	const { classes, functions } = props.links;

	return (
		<aside
			className={clsx(
				"fixed top-0 h-full w-[280px] shrink-0 flex-col overflow-y-hidden bg-b-900",
				"md:sticky md:top-header-height md:h-sidebar-height",
				"hidden md:flex md:translate-x-0",
			)}
		>
			{/* Side bar Name */}
			<p className="py-5 text-f-100">{props.name}</p>

			<div className="styled-scrollbar transform-gpu overflow-y-scroll pb-10">
				<Accordion type="multiple" defaultValue={["classes", "functions"]}>
					<div className="flex flex-col gap-1">
						{classes && (
							<ReferenceSideBarCategory
								links={classes}
								activeLink={props.activeLink}
								category="Classes"
								id="classes"
							/>
						)}

						{functions && (
							<ReferenceSideBarCategory
								links={functions}
								activeLink={props.activeLink}
								category="Functions"
								id="functions"
							/>
						)}
					</div>
				</Accordion>
			</div>
		</aside>
	);
}

function ReferenceSideBarCategory(props: {
	links: SideBarLink[];
	activeLink?: string;
	category: string;
	id: string;
}) {
	return (
		<AccordionItem value={props.id} className="border-none">
			<AccordionTrigger className="py-2 pr-3">
				<h2 className="text-f-200"> {props.category} </h2>
			</AccordionTrigger>

			<AccordionContent>
				<ul className="flex flex-col gap-1 border-l pr-3 ">
					{props.links.map((link) => {
						const isActive = props.activeLink === link.name;
						return (
							<li
								key={link.href}
								className={clsx(
									"border-l pl-2 transition-all duration-300 hover:border-l-f-100",
									isActive ? "border-l-f-100 " : "border-l-transparent",
								)}
							>
								<Link
									href={link.href}
									className={clsx(
										"flex rounded-md p-2 text-sm transition-colors duration-300",
										isActive ? "!bg-b-700 !text-f-100" : "text-f-300",
										"hover:bg-b-800 hover:text-f-100",
									)}
								>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</AccordionContent>
		</AccordionItem>
	);
}
