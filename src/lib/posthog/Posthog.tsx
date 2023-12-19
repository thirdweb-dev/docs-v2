"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const posthogHost = "https://a.thirdweb.com";
const apiKey = "1d9ebc991c049c913bedcf3d50916922";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
	posthog.init(apiKey, {
		api_host: posthogHost,
		// Enable debug mode in development
		loaded: (posthog) => {
			if (process.env.NODE_ENV === "development") {
				posthog.debug();
			}
		},
	});
}

// Track pageviews
export function PosthogPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname) {
			let url = window.origin + pathname;
			if (searchParams.toString()) {
				url = url + `?${searchParams.toString()}`;
			}
			posthog.capture("$pageview", {
				$current_url: url,
			});
		}
	}, [pathname, searchParams]);

	return null;
}

// Render this in the <head> of the page
export function PosthogHeadSetup() {
	return (
		<>
			<link rel="preconnect" href={posthogHost} />
			<link rel="dns-prefetch" href={posthogHost} />
		</>
	);
}
