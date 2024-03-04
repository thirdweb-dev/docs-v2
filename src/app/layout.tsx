import "./globals.css";
import { Inter, Fira_Code } from "next/font/google";
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
import { StickyTopContainer } from "../components/Document/StickyTopContainer";
import { EnableSmoothScroll } from "../components/others/SmoothScroll";

const sansFont = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: "variable",
});

const monoFont = Fira_Code({
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
				<EnableSmoothScroll />
				<div className="fixed bottom-4 right-4 z-floatingButton xl:hidden">
					<ContextAIBotButton />
				</div>

				<div className="relative flex min-h-screen flex-col">
					<StickyTopContainer>
						<Banner
							id="v5-alpha-sdk"
							text="Try out our new unified client SDK."
							href="https://portal.thirdweb.com/typescript/v5"
						/>
						<Header />
					</StickyTopContainer>
					{children}
				</div>
			</body>
		</html>
	);
}
