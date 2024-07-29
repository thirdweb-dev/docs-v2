import { CodeIcon, ZapIcon } from "lucide-react";
import type { SideBar } from "../../../components/Layouts/DocLayout";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";
import type { FunctionDoc } from "typedoc-better-json";

const slug = "/react-native/v5";
const docs = await fetchTypeScriptDoc("v5");

export const sidebar: SideBar = {
	name: "Connect React Native SDK",
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
							name: "Theme Values",
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
			],
		},
		{
			name: "Wallets",
			isCollapsible: false,
			links: [
				{
					name: "UI Components",
					links: ["ConnectButton", "ConnectEmbed", "AutoConnect"].map(
						(name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						}),
					),
				},
				{
					name: "Connection Hooks",
					href: `${slug}/connecting-wallets/hooks`,
					links:
						docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@walletConnection";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || [],
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
			name: "Pay",
			isCollapsible: false,
			links: [
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
			name: "Blockchain API",
			isCollapsible: false,
			links: [
				{
					name: "UI Components",
					links: ["TransactionButton"].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
				{
					name: "Reading State",
					href: `${slug}/reading-state`,
					links:
						docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@contract";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
				{
					name: "Transactions",
					href: `${slug}/transactions`,
					links:
						docs.hooks
							?.filter((hook) => {
								const [tag] = getCustomTag(hook) || [];
								return tag === "@transaction";
							})
							?.map((hook) => ({
								name: hook.name,
								href: `${slug}/${hook.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
				{
					name: "Extensions",
					href: `${slug}/extensions`,
					links: [
						{
							name: "Available Extensions",
							href: `${slug}/extensions/built-in`,
							isCollapsible: false,
							links: Object.entries(
								docs.functions
									?.filter((f) => {
										const [tag, extensionName] = getCustomTag(f) || [];
										return tag === "@extension" && extensionName !== "DEPLOY";
									})
									?.reduce(
										(acc, f) => {
											const [, extensionName] = getCustomTag(f) || [];
											if (extensionName) {
												acc[extensionName] = acc[extensionName] || [];
												acc[extensionName].push(f);
											}
											return acc;
										},
										{} as Record<string, FunctionDoc[]>,
									) || [],
							).map(([extensionName, extensionFunctions]) => ({
								name: extensionName,
								links: extensionFunctions
									.sort((a, b) => a.name.localeCompare(b.name))
									.map((f) => ({
										name: f.name,
										href: `${slug}/${extensionName.toLowerCase()}/${f.name}`,
										icon: <CodeIcon />,
									})),
							})),
						},
					],
				},
			],
		},
		{
			separator: true,
		},
		{
			name: "Differences from React",
			href: `${slug}/differences`,
		},
		{
			name: "Full Reference",
			href: "/references/typescript/v5/hooks",
			isCollapsible: false,
		},
	],
};
