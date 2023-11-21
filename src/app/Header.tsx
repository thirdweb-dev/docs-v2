"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDownIcon, Menu } from "lucide-react";
import clsx from "clsx";

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from "@/components/ui/accordion";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DocSearch } from "@/components/others/DocSearch";

const links = [
	{
		name: "Wallets",
		href: "/wallets",
	},
	{
		name: "Contracts",
		href: "/contracts",
	},
	{
		name: "Payments",
		href: "/payments",
	},
	{
		name: "Infrastructure",
		href: "/infra",
	},
	{
		name: "SDKs",
		href: "/#sdk",
	},
];

const referenceLinks = [
	{
		name: "TypeScript",
		href: "/references/typescript",
	},
	{
		name: "React",
		href: "/references/react",
	},
	{
		name: "React Native",
		href: "/references/react-native",
	},
	{
		name: "Storage",
		href: "/references/storage",
	},
	{
		name: "Wallets",
		href: "/references/wallets",
	},
	{
		name: "Python",
		href: "/references/python",
	},
	{
		name: "Go",
		href: "/references/go",
	},
];

const supportLinks = [
	{
		name: "Support Articles",
		href: "https://support.thirdweb.com/",
	},
	{
		name: "Contact Us",
		href: "https://thirdweb.com/contact-us",
	},
];

export function Header() {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

	return (
		<header className="sticky top-0 z-50 flex h-header-height w-full items-center border-b bg-b-900">
			<div
				className={
					"container flex items-center justify-between gap-6 p-4 xl:justify-start"
				}
			>
				<Link className="flex items-center gap-2" href="/">
					<Image
						src="/icons/thirdweb-logo.svg"
						alt=""
						width={150}
						height={25}
					/>
					<span className="mt-1 font-semibold leading-none text-f-300">
						DOCS
					</span>
				</Link>

				<div className="flex gap-1 xl:hidden">
					<DocSearch variant="icon" />

					{/* Mobile burger menu */}
					<Button
						variant="ghost"
						className="p-2"
						onClick={() => setShowBurgerMenu(!showBurgerMenu)}
					>
						<Menu className="h-7 w-7" />
					</Button>
				</div>

				<nav
					className={clsx(
						"grow gap-5",
						!showBurgerMenu ? "hidden xl:flex" : "flex",
						"fixed inset-0 top-header-height flex-col bg-b-800 p-6 animate-in fade-in-20 slide-in-from-top-3 ",
						"xl:static xl:animate-none xl:flex-row xl:justify-between xl:bg-transparent xl:p-0",
					)}
				>
					<ul className="flex flex-col gap-5 xl:flex-row xl:items-center">
						{links.map((link) => {
							return (
								<li
									key={link.href}
									onClick={() => {
										setShowBurgerMenu(false);
									}}
								>
									<NavLink name={link.name} href={link.href} />
								</li>
							);
						})}
					</ul>

					<div className="flex flex-col justify-start gap-5 xl:flex-row   xl:items-center xl:gap-3">
						<div className="hidden xl:block">
							<DocSearch variant="search" />
						</div>

						<div className="flex flex-col gap-5 xl:flex-row xl:gap-1">
							<DropdownLinks
								links={referenceLinks}
								onLinkClick={() => setShowBurgerMenu(false)}
								category="References"
							/>

							<DropdownLinks
								links={supportLinks}
								onLinkClick={() => setShowBurgerMenu(false)}
								category="Support"
							/>
						</div>

						<NavLink
							name="Changelog"
							href="/changelog"
							onClick={() => {
								setShowBurgerMenu(false);
							}}
						/>
					</div>
				</nav>
			</div>
		</header>
	);
}

function DropdownLinks(props: {
	onLinkClick?: () => void;
	category: string;
	links: Array<{ name: string; href: string }>;
}) {
	return (
		<>
			{/* desktop */}
			<div className="hidden xl:block">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="inline-flex gap-1 pl-2 pr-1 text-f-300 hover:text-f-100"
						>
							{props.category}
							<ChevronDownIcon className="w-4 text-f-300 opacity-70" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						className="flex flex-col gap-1 bg-b-800 p-3"
						style={{
							width: "150px",
						}}
					>
						{props.links.map((info) => {
							return (
								<DropdownMenuItem asChild key={info.name}>
									<Link
										href={info.href}
										target={info.href.startsWith("http") ? "_blank" : ""}
										prefetch={false}
										className={clsx(
											"flex cursor-pointer text-f-200",
											"hover:bg-b-600 hover:text-f-100",
										)}
									>
										{info.name}
									</Link>
								</DropdownMenuItem>
							);
						})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* mobile */}
			<div className="xl:hidden">
				<Accordion type="multiple">
					<AccordionItem value="x" className="border-none">
						<AccordionTrigger className="py-0 text-base text-f-300">
							{props.category}
						</AccordionTrigger>
						<AccordionContent>
							<div className="pt-2">
								<div className="flex flex-col gap-4 border-l-2 pl-4 pt-3">
									{props.links.map((info) => {
										return (
											<NavLink
												key={info.name}
												name={info.name}
												href={info.href}
												onClick={props.onLinkClick}
											/>
										);
									})}
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
}

function NavLink(props: { href: string; name: string; onClick?: () => void }) {
	const pathname = usePathname();
	return (
		<Link
			href={props.href}
			onClick={props.onClick}
			target={props.href.startsWith("http") ? "_blank" : ""}
			className={clsx(
				"text-base transition-colors hover:text-f-100 xl:text-sm",
				pathname === props.href ? "text-f-100" : "text-f-300 ",
			)}
		>
			{props.name}
		</Link>
	);
}
