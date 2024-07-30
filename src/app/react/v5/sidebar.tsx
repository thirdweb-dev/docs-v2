import { Book, CodeIcon, ExternalLink, ZapIcon } from "lucide-react";
import type { SideBar } from "../../../components/Layouts/DocLayout";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";
import type { FunctionDoc } from "typedoc-better-json";
import { TypeScriptIcon } from "../../../icons";

const slug = "/react/v5";
const docs = await fetchTypeScriptDoc("v5");

export const sidebar: SideBar = {
	name: "Connect React SDK",
	links: [
		{
			separator: true,
		},
		{
			name: "Overview",
			href: slug,
		},
		{
			name: "Getting Started",
			href: `${slug}/getting-started`,
			icon: <ZapIcon />,
		},
		{
			name: "Live Playground",
			href: "https://playground.thirdweb.com/",
			icon: <ExternalLink />,
		},
		{
			separator: true,
		},
		{
			name: "Core",
			isCollapsible: false,
			links: [
				{
					name: "Client",
					href: `${slug}/createThirdwebClient`,
				},
				{
					name: "ThirdwebProvider",
					href: `${slug}/ThirdwebProvider`,
				},
				{
					name: "Themes",
					links: [
						{
							name: "Theme Props",
							href: `${slug}/Theme`,
							icon: <CodeIcon />,
						},
						...(docs.functions
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@theme";
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
								icon: <CodeIcon />,
							})) || []),
					],
				},
				{
					name: "TS reference",
					href: "/typeScript/v5",
					icon: <TypeScriptIcon />,
				},
			],
		},
		{
			separator: true,
		},
		{
			name: "Wallets",
			isCollapsible: false,
			links: [
				{
					name: "UI Components",
					href: `${slug}/connecting-wallets/ui-components`,
					links: [
						{
							name: "Introduction",
							href: `${slug}/connecting-wallets/ui-components`,
							icon: <Book />,
						},
						...["ConnectButton", "ConnectEmbed", "AutoConnect"].map((name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						})),
					],
				},
				{
					name: "Connection Hooks",
					href: `${slug}/connecting-wallets/hooks`,
					links: [
						{
							name: "Introduction",
							href: `${slug}/connecting-wallets/hooks`,
							icon: <Book />,
						},
						...(docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@walletConnection";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || []),
					],
				},
				{
					name: "Wallet Hooks",
					links:
						docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@wallet";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
			],
		},
		{
			separator: true,
		},
		{
			name: "Pay",
			isCollapsible: false,
			links: [
				{
					name: "UI Components",
					links: ["PayEmbed"].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
				{
					name: "Buy with Fiat",
					links:
						docs.hooks
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@buyCrypto" && f.name.includes("Fiat");
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
				{
					name: "Buy with Crypto",
					links:
						docs.hooks
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@buyCrypto" && f.name.includes("Crypto");
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
			],
		},
		{
			separator: true,
		},
		{
			name: "Blockchain API",
			isCollapsible: false,
			links: [
				{
					name: "UI Components",
					links: ["ClaimButton", "TransactionButton", "MediaRenderer"].map(
						(name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						}),
					),
				},
				{
					name: "Reading State",
					href: `${slug}/reading-state`,
					links: [
						{
							name: "Introduction",
							href: `${slug}/reading-state`,
							icon: <Book />,
						},
						...(docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@contract";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || []),
					],
				},
				{
					name: "Transactions",
					href: `${slug}/transactions`,
					links: [
						{
							name: "Introduction",
							href: `${slug}/transactions`,
							icon: <Book />,
						},
						...(docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@transaction";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || []),
					],
				},
				{
					name: "Extensions",
					href: `${slug}/extensions`,
					links: [
						{
							name: "Using Extensions",
							href: `${slug}/extensions`,
							icon: <Book />,
						},
						{
							name: "Available Extensions",
							href: "/typescript/v5/extensions/built-in",
							icon: <TypeScriptIcon />,
						},
					],
				},
			],
		},
		{ separator: true },
		{
			name: "Migrate from v4",
			href: `${slug}/migrate`,
		},
		{
			name: "Migrate from RainbowKit",
			href: `${slug}/rainbow-kit-migrate`,
		},
		{
			name: "Full Reference",
			href: "/references/typescript/v5",
			isCollapsible: false,
		},
	],
};
