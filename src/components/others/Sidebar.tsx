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
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type LinkMeta = {
	name: string;
	href: string;
};

export type LinkGroup = {
	name: string;
	href?: string;
	links: SidebarLink[];
	expanded?: boolean;
	/**
	 * If set to false, the the group will not be rendered as an accordion
	 * @defaultValue true
	 */
	isCollapsible?: boolean;
	icon?: StaticImport | React.ReactElement;
};

export function isStaticImport(value: any): value is StaticImport {
	const isObj = typeof value === "object" && value !== null;
	if (!isObj) {
		return false;
	}

	return "default" in value || "src" in value;
}

export type SidebarLink = LinkMeta | LinkGroup | { separator: true };

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

	if ("separator" in props.link) {
		return <hr className="my-2 border-t" />;
	}

	const isActive = pathname === props.link.href;

	const { link } = props;
	if ("links" in link) {
		if (link.isCollapsible === false) {
			return (
				<DocSidebarNonCollapsible
					key={link.name}
					linkGroup={link}
					onLinkClick={props.onLinkClick}
				/>
			);
		}
		return (
			<DocSidebarCategory
				key={link.name}
				linkGroup={link}
				onLinkClick={props.onLinkClick}
			/>
		);
	} else {
		return (
			<Link
				href={link.href}
				onClick={props.onLinkClick}
				className={clsx(
					"block overflow-hidden text-ellipsis py-2 text-base font-medium transition-colors duration-300 hover:text-f-100",
					isActive ? "font-medium text-accent-500" : "text-f-300",
				)}
			>
				{link.name}
			</Link>
		);
	}
}

function DocSidebarNonCollapsible(props: {
	linkGroup: LinkGroup;
	onLinkClick?: () => void;
}) {
	const pathname = usePathname();
	const { href, name, links, icon } = props.linkGroup;
	const isCategoryActive = href && href === pathname;

	return (
		<div className="my-4">
			<div className="mb-2 flex items-center gap-2">
				{icon && <SidebarIcon icon={icon} />}
				{href ? (
					<Link
						className={cn(
							"block text-base text-f-100 hover:text-accent-500 font-medium",
							isCategoryActive && "!text-accent-500",
						)}
						href={href}
					>
						{name}
					</Link>
				) : (
					<div className="text-base font-semibold">{name}</div>
				)}
			</div>

			<ul className="flex flex-col">
				{links.map((link, i) => {
					return (
						<li key={i}>
							<SidebarItem link={link} onLinkClick={props.onLinkClick} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function DocSidebarCategory(props: {
	linkGroup: LinkGroup;
	onLinkClick?: () => void;
}) {
	const pathname = usePathname();
	const { href, name, links, expanded, icon } = props.linkGroup;
	const isCategoryActive = href && href === pathname;

	const hasActiveHref = containsActiveHref(
		{
			name: name,
			links: links,
			href: href,
		},
		pathname,
	);
	const defaultOpen = !!(hasActiveHref || expanded);

	const [open, setOpen] = useState(defaultOpen ? true : false);

	const triggerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setOpen(defaultOpen);
	}, [defaultOpen]);

	const trigger = (
		<AccordionTrigger
			className={cn(
				"py-2 text-base",
				isCategoryActive && "!font-semibold !text-accent-500",
				"text-f-300 hover:text-f-100",
			)}
		>
			<div className="flex gap-2 font-medium" ref={triggerRef}>
				{icon && <SidebarIcon icon={icon} />}
				{name}
			</div>
		</AccordionTrigger>
	);

	return (
		<Accordion
			collapsible
			type="single"
			value={open ? "x" : ""}
			onValueChange={(value) => {
				if (value === "x") {
					setOpen(true);
				} else {
					setOpen(false);
				}
			}}
		>
			<AccordionItem value="x" className="border-none">
				{href ? (
					<Link
						href={href}
						className={cn("block w-full text-left font-medium")}
					>
						{trigger}
					</Link>
				) : (
					trigger
				)}

				<AccordionContent>
					<ul className="flex flex-col border-l-2 pl-4">
						{links.map((link, i) => {
							return (
								<li key={i}>
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
				<Button className="w-full justify-between border bg-b-800 py-4 text-left font-medium text-f-100 xl:hidden">
					{props.name}
					<ChevronDown
						className={clsx(
							"size-5 text-f-300 transition-transform",
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
	if ("links" in sidebarlink) {
		return sidebarlink.links.some((link) =>
			containsActiveHref(link, activeLink),
		);
	}

	if ("separator" in sidebarlink) {
		return false;
	}

	if (sidebarlink.href === activeLink) {
		return true;
	}

	return false;
}

function SidebarIcon(props: { icon: StaticImport | React.ReactElement }) {
	if (isStaticImport(props.icon)) {
		return <Image src={props.icon} alt="" className="size-5" />;
	}
	return <div className="[&>*]:size-5">{props.icon}</div>;
}
