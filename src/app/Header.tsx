"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import clsx from "clsx";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const links = [
	{
		name: "Home",
		href: "/",
	},
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
		name: "Python",
		href: "/python/references",
	},
	{
		name: "Go",
		href: "/go/references",
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
					<span className="mt-1 leading-none tracking-wider text-f-300">
						DOCS
					</span>
				</Link>

				{/* Mobile burger menu */}
				<Button
					variant="ghost"
					className="p-2 md:hidden"
					onClick={() => setShowBurgerMenu(!showBurgerMenu)}
				>
					<Menu className="h-7 w-7" />
				</Button>

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

					<div className="flex flex-col justify-start gap-5 md:flex-row md:items-center">
						{/* References Dropdown for desktop */}
						<div className="hidden md:block">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="sm"
										className="inline-flex gap-1 text-f-300"
									>
										References
										<ChevronDown className="w-4 text-f-300" />
									</Button>
								</DropdownMenuTrigger>

								<DropdownMenuContent
									className="flex flex-col gap-1 bg-b-900 p-3"
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
														"flex cursor-pointer !p-2 text-f-200",
														"hover:bg-b-800 hover:text-f-100",
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
							<NavLink name="References" href="/references" />
						</div>

						<NavLink name="Changelog" href="/changelog" />
					</div>
				</nav>
			</div>
		</header>
	);
}

function NavLink(props: { href: string; name: string }) {
	const pathname = usePathname();
	return (
		<Link
			href={props.href}
			className={clsx(
				"text-sm transition-colors hover:text-f-200",
				pathname === props.href ? "text-f-200" : "text-f-300 ",
			)}
		>
			{props.name}
		</Link>
	);
}
