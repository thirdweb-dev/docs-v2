"use client";

import Link from "next/link";
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
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type LinkMeta = {
	name: string;
	href: string;
};

export type LinkGroup = {
	name: string;
	href?: string;
	links: SidebarLink[];
	expanded?: boolean;
};

export type SidebarLink = LinkMeta | LinkGroup;

type ReferenceSideBarProps = {
	links: SidebarLink[];
	onLinkClick?: () => void;
	name: string;
};

export function DocSidebar(props: ReferenceSideBarProps) {
	return (
		<div className="flex h-full flex-col">
			{/* Side bar Name */}
			<p className="py-5 text-lg font-semibold text-f-100">{props.name}</p>

			<ul className="styled-scrollbar transform-gpu overflow-y-scroll pb-10 pr-3">
				{props.links.map((link, i) => (
					<li key={i}>
						<SidebarItem link={link} onLinkClick={props.onLinkClick} />
					</li>
				))}
			</ul>
		</div>
	);
}

function SidebarItem(props: { link: SidebarLink; onLinkClick?: () => void }) {
	const pathname = usePathname();
	const isActive = pathname === props.link.href;

	const { link } = props;
	if ("links" in link) {
		return (
			<DocSidebarCategory
				key={link.name}
				onLinkClick={props.onLinkClick}
				links={link.links}
				category={link.name}
				id={link.name}
				href={link.href}
				expanded={link.expanded}
			/>
		);
	} else {
		return (
			<Link
				href={link.href}
				onClick={props.onLinkClick}
				className={clsx(
					"block overflow-hidden text-ellipsis py-2 text-base transition-colors duration-300 hover:text-f-100",
					isActive ? "font-semibold text-accent-500" : "text-f-300",
				)}
			>
				{link.name}
			</Link>
		);
	}
}

function DocSidebarCategory(props: {
	links: SidebarLink[];
	category: string;
	id: string;
	href?: string;
	onLinkClick?: () => void;
	expanded?: boolean;
}) {
	const pathname = usePathname();
	const isCategoryActive = props.href && props.href === pathname;

	const hasActiveHref = containsActiveHref(
		{
			name: props.category,
			links: props.links,
			href: props.href,
		},
		pathname,
	);

	const trigger = (
		<AccordionTrigger
			className={cn(
				"py-2 text-base",
				isCategoryActive && "!font-semibold !text-accent-500",
				"text-f-300 hover:text-f-100",
			)}
		>
			{props.category}
		</AccordionTrigger>
	);

	return (
		<Accordion
			collapsible
			type="single"
			defaultValue={props.expanded || hasActiveHref ? "x" : undefined}
		>
			<AccordionItem value="x" className="border-none">
				{props.href ? (
					<Link href={props.href} className={cn("block w-full text-left")}>
						{trigger}
					</Link>
				) : (
					trigger
				)}

				<AccordionContent>
					<ul className="flex flex-col border-l-2 pl-4">
						{props.links.map((link) => {
							return (
								<li key={link.name + link.href}>
									<SidebarItem link={link} onLinkClick={props.onLinkClick} />
								</li>
							);
						})}
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export function DocSidebarMobile(props: ReferenceSideBarProps) {
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
					{props.name}
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
					<DocSidebar
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

function containsActiveHref(
	sidebarlink: SidebarLink,
	activeLink: string,
): boolean {
	if (sidebarlink.href === activeLink) {
		return true;
	}
	if ("links" in sidebarlink) {
		return sidebarlink.links.some((link) =>
			containsActiveHref(link, activeLink),
		);
	}
	return false;
}
