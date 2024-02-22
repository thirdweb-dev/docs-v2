"use client";

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
import { ContextAIBotButton } from "@/components/others/ContextAIButton";
import { ThemeSwitcher } from "../components/others/theme/ThemeSwitcher";
import { ThirdwebIcon } from "../icons/thirdweb";

const links = [
	{
		name: "Connect",
		href: "/connect",
	},
	{
		name: "Contracts",
		href: "/contracts",
	},
	{
		name: "Engine",
		href: "/engine",
	},
	{
		name: "Payments",
		href: "/payments",
	},
];

const sdkLinks = [
	{
		name: "TypeScript",
		href: "/typescript-sdks",
	},
	{
		name: "Unity",
		href: "/unity",
	},
	{
		name: "Solidity",
		href: "/contracts/build/overview",
	},
];

const supportLinks = [
	{
		name: "Support Articles",
		href: "https://support.thirdweb.com/",
	},
	{
		name: "Contact Us",
		href: "https://thirdweb.com/support",
	},
];

export function Header() {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

	return (
		<header className="flex w-full items-center border-b bg-b-900">
			<div
				className={
					"container flex items-center justify-between gap-6 p-4 xl:justify-start"
				}
			>
				<Link
					className="flex items-center gap-2"
					href="/"
					aria-label="thirdweb Docs"
					title="thirdweb Docs"
				>
					<ThirdwebIcon className="size-8" />
					<span className="text-[23px] font-bold leading-none tracking-tight text-f-100">
						Docs
					</span>
				</Link>

				<div className="flex gap-1 xl:hidden">
					<ThemeSwitcher className="border-none bg-transparent" />

					<DocSearch variant="icon" />

					{/* Mobile burger menu */}
					<Button
						variant="ghost"
						className="p-2"
						onClick={() => setShowBurgerMenu(!showBurgerMenu)}
					>
						<Menu className="size-7" />
					</Button>
				</div>

				<nav
					className={clsx(
						"grow gap-5",
						!showBurgerMenu ? "hidden xl:flex" : "flex",
						"fixed inset-0 top-sticky-top-height flex-col bg-b-800 p-6 animate-in fade-in-20 slide-in-from-top-3 ",
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

						<DropdownLinks
							links={sdkLinks}
							onLinkClick={() => setShowBurgerMenu(false)}
							category="SDKs"
						/>
					</ul>

					<div className="flex flex-col justify-start gap-5 xl:flex-row   xl:items-center xl:gap-3">
						<div className="hidden xl:flex">
							<ThemeSwitcher />
						</div>

						<div className="hidden xl:flex">
							<ContextAIBotButton />
						</div>

						<div className="hidden xl:block">
							<DocSearch variant="search" />
						</div>

						<div className="flex flex-col gap-5 xl:flex-row xl:gap-1">
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
							className="inline-flex gap-1 pl-2 pr-1 font-medium text-f-300 hover:text-f-100"
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
											"flex cursor-pointer font-medium text-f-200",
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
						<AccordionTrigger className="py-0 text-base font-medium text-f-300">
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
				"text-base font-medium transition-colors hover:text-f-100 xl:text-sm",
				pathname === props.href ? "text-f-100" : "text-f-300 ",
			)}
		>
			{props.name}
		</Link>
	);
}
