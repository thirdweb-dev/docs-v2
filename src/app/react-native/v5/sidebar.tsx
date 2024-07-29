import { ZapIcon } from "lucide-react";
import type { SideBar } from "../../../components/Layouts/DocLayout";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";

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
					name: "ThirdwebProvider",
					href: `${slug}/ThirdwebProvider`,
				},
				{
					name: "Themes",
					links:
						docs.functions
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@theme";
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
							})) || [],
				},
			],
		},
		{
			name: "Wallets",
			isCollapsible: false,
			links: [
				{
					name: "UI Components",
					href: `${slug}/connecting-wallets/ui-components`,
					links: ["ConnectButton", "ConnectEmbed", "AutoConnect"].map(
						(name) => ({
							name,
							href: `${slug}/${name}`,
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
							})) || [],
				},
				{
					name: "Extensions",
					href: `${slug}/extensions`,
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
