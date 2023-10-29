"use client";

import Link from "next/link";
import type { LinkMeta } from "./types";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight, X } from "lucide-react";

type ReferenceSideBarProps = {
	linkGroups: Array<{
		group: string;
		links: LinkMeta[];
	}>;
	onLinkClick?: () => void;
	name: string;
};

export function ReferenceSideBar(props: ReferenceSideBarProps) {
	// open the last accordion by default
	const lastGroup = props.linkGroups[props.linkGroups.length - 1]?.group;

	return (
		<div className="flex h-full flex-col">
			{/* Side bar Name */}
			<p className="py-5 text-f-100">{props.name}</p>

			<div className="styled-scrollbar transform-gpu overflow-y-scroll pb-10">
				<Accordion
					type="multiple"
					defaultValue={lastGroup ? [lastGroup] : undefined}
				>
					<div className="flex flex-col gap-1">
						{props.linkGroups.map((linkGroup) => {
							return (
								<ReferenceSideBarCategory
									key={linkGroup.group}
									onLinkClick={props.onLinkClick}
									links={linkGroup.links}
									category={linkGroup.group}
									id={linkGroup.group}
								/>
							);
						})}
					</div>
				</Accordion>
			</div>
		</div>
	);
}

function ReferenceSideBarCategory(props: {
	links: LinkMeta[];
	category: string;
	id: string;
	onLinkClick?: () => void;
}) {
	const pathname = usePathname();
	const activeLink = pathname.split("/").slice(-1)[0];

	return (
		<AccordionItem value={props.id} className="py-1">
			<AccordionTrigger className="py-2 pr-3">
				<h2 className="text-f-200"> {props.category} </h2>
			</AccordionTrigger>

			<AccordionContent>
				<ul className="flex flex-col gap-1 border-l pr-3 ">
					{props.links.map((link) => {
						const isActive = activeLink === link.name;
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
									onClick={props.onLinkClick}
									className={clsx(
										"block text-ellipsis break-all rounded-md p-2 text-sm transition-colors duration-300",
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

export function ReferenceMenuMobile(props: ReferenceSideBarProps) {
	const [open, _setOpen] = useState(false);

	const setOpen = (value: boolean) => {
		if (value) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		_setOpen(value);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button className="mt-5 w-full justify-between border bg-b-800 py-4 text-left text-f-100 lg:hidden">
					References
					<ChevronDown
						className={clsx(
							"h-5 w-5 text-f-300 transition-transform",
							open && "rotate-180",
						)}
					/>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent asChild sideOffset={10} align="center" side="bottom">
				<div className="max-h-[70vh] w-[calc(100vw-32px)] overflow-y-auto rounded-lg border bg-b-800 px-4">
					<ReferenceSideBar
						{...props}
						onLinkClick={() => {
							setOpen(false);
							if (props.onLinkClick) {
								props.onLinkClick();
							}
						}}
					/>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
