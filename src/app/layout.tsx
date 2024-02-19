import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { Header } from "./Header";
import NextTopLoader from "nextjs-toploader";
import { PosthogHeadSetup, PosthogPageView } from "@/lib/posthog/Posthog";
import {
	ContextAIBotButton,
	ContextAIBotScript,
} from "@/components/others/ContextAIButton";
import Script from "next/script";
import { createMetadata } from "@/components/Document";
import { SetStoredTheme } from "../components/others/theme/theme";
import { Banner } from "../components/others/Banner";

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

export const metadata = createMetadata({
	title: "thirdweb docs",
	description: "thirdweb developer portal",
	image: {
		title: "Build apps and games on any EVM chain",
		icon: "thirdweb",
	},
});

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
			<body
				className={`${sansFont.variable} ${monoFont.variable} font-sans`}
				suppressHydrationWarning
			>
				<SetStoredTheme />
				<NextTopLoader
					color="var(--accent-500)"
					height={2}
					shadow={false}
					showSpinner={false}
				/>
				<PosthogPageView />
				<div className="fixed bottom-4 right-4 z-50 xl:hidden">
					<ContextAIBotButton />
				</div>

				<div className="relative flex min-h-screen flex-col">
					<div className="sticky top-0 z-[1000]">
						<Banner
							id="v5-alpha-sdk"
							text="Step into the cutting-edge of web3 development with our new SDK in alpha!"
							href="/typescript/v5"
						/>
						<Header />
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
