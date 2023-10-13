"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export function Nav() {
	const pathname = usePathname();
	return (
		<nav className="flex justify-between">
			<ul className="flex items-center gap-2">
				{links.map((link) => {
					const isActive = pathname === link.href;
					return (
						<li key={link.href}>
							<Button
								size="sm"
								asChild
								variant={isActive ? "default" : "ghost"}
							>
								<Link href={link.href}>{link.name}</Link>
							</Button>
						</li>
					);
				})}
			</ul>

			<div className="flex gap-3">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="gap-2">
							References
							<ChevronDown className="w-4 text-f-200" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						className="flex flex-col gap-1 bg-b-900 p-3"
						style={{
							width: "150px",
						}}
					>
						{[
							{
								name: "Python",
								href: "/python/references",
							},
							{
								name: "Go",
								href: "/go/references",
							},
						].map((info) => {
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

				<Button size="sm" asChild variant={"ghost"}>
					<Link href="/changelog">Changelog</Link>
				</Button>
			</div>
		</nav>
	);
}
