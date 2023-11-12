"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";
import clsx from "clsx";

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
];

const references = [
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

export function Header() {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

	return (
		<header className="sticky top-0 z-50 flex h-header-height w-full items-center border-b bg-b-900">
			<div
				className={
					"container flex items-center justify-between gap-10 p-4 md:justify-start"
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

				<div className="flex gap-1 md:hidden">
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
						!showBurgerMenu ? "hidden md:flex" : "flex",
						"fixed inset-0 top-header-height flex-col bg-b-800 p-6 animate-in fade-in-20 slide-in-from-top-3 ",
						"md:static md:animate-none md:flex-row md:justify-between md:bg-transparent md:p-0",
					)}
				>
					<ul className="flex flex-col gap-5 md:flex-row md:items-center">
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

					<div className="flex flex-col justify-start gap-5 md:flex-row   md:items-center md:gap-3">
						<div className="hidden md:block">
							<DocSearch variant="search" />
						</div>

						{/* References Dropdown for desktop */}
						<div className="hidden md:block">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="sm"
										className="inline-flex gap-1 text-f-300 hover:text-f-100"
									>
										References
										<ChevronRight className="w-4 text-f-300" />
									</Button>
								</DropdownMenuTrigger>

								<DropdownMenuContent
									className="flex flex-col gap-1 bg-b-800 p-3"
									style={{
										width: "150px",
									}}
								>
									{references.map((info) => {
										return (
											<DropdownMenuItem asChild key={info.name}>
												<Link
													href={info.href}
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

						{/* References Link for mobile */}
						<div className="md:hidden">
							<NavLink
								name="References"
								href="/references"
								onClick={() => {
									setShowBurgerMenu(false);
								}}
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

function NavLink(props: { href: string; name: string; onClick?: () => void }) {
	const pathname = usePathname();
	return (
		<Link
			href={props.href}
			onClick={props.onClick}
			className={clsx(
				"text-sm transition-colors hover:text-f-100",
				pathname === props.href ? "text-f-100" : "text-f-300 ",
			)}
		>
			{props.name}
		</Link>
	);
}
