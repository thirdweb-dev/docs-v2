"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const posthogDomain = "https://a.thirdweb.com";
const apiKey = "1d9ebc991c049c913bedcf3d50916922";
const posthogInitOptions = {
	api_host: posthogDomain,
	// debug: true, // for development
};

// enabled on production only
const enablePosthog = process.env.NODE_ENV === "production";

// copied from https://github.com/PostHog/posthog-docusaurus/blob/master/src/index.js#L52
// TODO: improve this by using the posthog-js library
const posthogInit = `
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init(${JSON.stringify(apiKey)}, ${JSON.stringify(posthogInitOptions)})
`;

export function PosthogScript() {
	if (!enablePosthog) {
		return null;
	}

	return (
		<Script
			id="posthog-init"
			dangerouslySetInnerHTML={{
				__html: posthogInit,
			}}
		></Script>
	);
}

export function PosthogPageView() {
	const pathname = usePathname();

	useEffect(() => {
		if (!enablePosthog) {
			return;
		}

		if ("posthog" in window) {
			(window.posthog as any).capture("$pageview");
		}
	}, [pathname]);

	useEffect(() => {
		if (enablePosthog) {
			console.debug("Posthog enabled");
		}
	}, []);

	return null;
}

// Render this in the <head> of the page
export function PosthogHeadSetup() {
	if (!enablePosthog) {
		return null;
	}

	return (
		<>
			<link rel="preconnect" href={posthogDomain} />
			<link rel="dns-prefetch" href={posthogDomain} />
			<PosthogScript />
		</>
	);
}
