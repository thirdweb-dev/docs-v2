import { Button } from "@/components/ui/button";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { Nav } from "./Nav";
import clsx from "clsx";

const sansFont = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: "variable",
});

const monoFont = Roboto_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: "variable",
});

export const metadata: Metadata = {
	title: "thirdweb docs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${sansFont.variable} ${monoFont.variable} font-sans`}>
				<div className="relative flex min-h-screen flex-col">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}

function Header() {
	return (
		<header
			className={clsx(
				"sticky top-0 z-50 w-full",
				"flex flex-col gap-6",
				"border-b bg-b-800",
				"p-6 md:pb-3",
			)}
		>
			{/* Logo */}
			<div className="flex items-center gap-2">
				<Image src="/icons/thirdweb-logo.svg" alt="" width={150} height={25} />
				<span className="mt-1 text-lg leading-none tracking-wider text-f-200">
					DOCS
				</span>
			</div>

			{/* Desktop Nav */}
			<div
				className="hidden sm:block"
				style={{
					marginLeft: "-0.25rem",
				}}
			>
				<Nav />
			</div>
		</header>
	);
}
