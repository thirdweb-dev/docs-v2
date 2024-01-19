import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Header } from "./Header";
import NextTopLoader from "nextjs-toploader";
import { PosthogHeadSetup, PosthogPageView } from "@/lib/posthog/Posthog";
import {
	ContextAIBotButton,
	ContextAIBotScript,
} from "@/components/others/ContextAIButton";
import Script from "next/script";

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
	metadataBase: new URL("https://portal.thirdweb.com"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<PosthogHeadSetup />
				<Script
					src="https://thirdweb.com/js/pl.js"
					defer
					data-domain="portal.thirdweb.com"
					data-api="https://pl.thirdweb.com/api/event"
				/>
				<ContextAIBotScript />
			</head>
			<body className={`${sansFont.variable} ${monoFont.variable} font-sans`}>
				<NextTopLoader
					color="var(--accent-600)"
					height={2}
					shadow={false}
					showSpinner={false}
				/>
				<PosthogPageView />
				<div className="fixed bottom-4 right-4 z-50 xl:hidden">
					<ContextAIBotButton />
				</div>
				<div className="relative flex min-h-screen flex-col">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
