"use client";

import Link from "next/link";
import type { SideBarLink } from "./types";
import clsx from "clsx";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
	links: {
		classes?: SideBarLink[];
		functions?: SideBarLink[];
	};
	onLinkClick?: () => void;
	activeLink?: string;
	name: string;
};

export function ReferenceSideBar(props: ReferenceSideBarProps) {
	const { classes, functions } = props.links;

	return (
		<aside className="flex h-full flex-col">
			{/* Side bar Name */}
			<p className="py-5 text-f-100">{props.name}</p>

			<div className="styled-scrollbar transform-gpu overflow-y-scroll pb-10">
				<Accordion type="multiple" defaultValue={["classes", "functions"]}>
					<div className="flex flex-col gap-1">
						{classes && (
							<ReferenceSideBarCategory
								onLinkClick={props.onLinkClick}
								links={classes}
								activeLink={props.activeLink}
								category="Classes"
								id="classes"
							/>
						)}

						{functions && (
							<ReferenceSideBarCategory
								onLinkClick={props.onLinkClick}
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
	onLinkClick?: () => void;
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
									onClick={props.onLinkClick}
									scroll={false}
									className={clsx(
										"flex rounded-md p-2 text-sm transition-colors duration-300",
										isActive ? "bg-b-800 !text-f-100" : "text-f-300",
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
				<Button className="mt-5 w-full justify-between border bg-b-800 py-6 text-left text-f-100 md:hidden">
					{props.activeLink || "References"}
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
