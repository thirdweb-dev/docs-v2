import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Header } from "./Header";

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
