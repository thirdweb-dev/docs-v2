import type { SideBar } from "../../../components/Layouts/DocLayout";
import { ReactIcon } from "../../../icons";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";

const slug = "/react/v5";
const docs = await fetchTypeScriptDoc("v5");

export const sidebar: SideBar = {
	name: "Connect React SDK",
	links: [
		{
			icon: <ReactIcon className="size-4" />,
			name: "React",
			isCollapsible: false,
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
							links:
								docs.components
									?.filter((hook) => {
										// TODO should tag individual components
										return hook.name.toLowerCase().includes("connect");
									})
									?.map((hook) => ({
										name: hook.name,
										href: `${slug}/${hook.name}`,
									})) || [],
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
							name: "UI Components",
							href: `${slug}/connecting-wallets/ui-components`,
							links: ["PayEmbed"].map((name) => ({
								name,
								href: `${slug}/${name}`,
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
							links:
								docs.components
									?.filter((hook) => {
										// TODO should tag individual components
										return !hook.name.toLowerCase().includes("connect");
									})
									?.map((hook) => ({
										name: hook.name,
										href: `${slug}/${hook.name}`,
									})) || [],
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
			],
		},
		{
			separator: true,
		},
		{
			name: "Full Reference",
			href: "/references/typescript/v5",
			isCollapsible: false,
		},
	],
};
