import type { SideBar } from "../../../components/Layouts/DocLayout";
import { TypeScriptIcon, ReactIcon } from "../../../icons";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";

const slug = "/typescript/v5";
const reactSlug = `${slug}/react`;
const reactNativeSlug = `${slug}/react-native`;
const docs = await fetchTypeScriptDoc("v5");

export const sidebar: SideBar = {
	name: "Connect",
	links: [
		{
			name: "Overview",
			href: slug,
		},
		{
			name: "Why thirdweb?",
			href: `${slug}/why-thirdweb`,
		},
		{
			separator: true,
		},
		{
			icon: <TypeScriptIcon className="size-4" />,
			name: "TypeScript",
			isCollapsible: false,
			links: [
				{
					name: "Core",
					isCollapsible: false,
					links: [
						{
							name: "Client",
							href: `${slug}/client`,
						},
						{
							name: "Storage",
							href: `${slug}/storage`,
						},
						{
							name: "Adapters",
							href: `${slug}/adapters`,
						},
					],
				},
				{
					name: "Wallets",
					isCollapsible: false,
					links: [
						{
							name: "Accounts & Wallets",
							href: `${slug}/wallets`,
						},
						{
							name: "Connecting wallets",
							href: `${slug}/connecting-wallets`,
						},
						{
							name: "Supported Wallets",
							href: `${slug}/supported-wallets`,
						},
						{
							name: "Auth (SIWE)",
							href: `${slug}/auth`,
						},
					],
				},

				{
					name: "Blockchain API",
					isCollapsible: false,
					links: [
						{
							name: "Chain",
							href: `${slug}/chain`,
						},
						{
							name: "Contract",
							href: `${slug}/contract`,
						},
						{
							name: "Reading state",
							href: `${slug}/transactions/read`,
						},
						{
							name: "Preparing transactions",
							href: `${slug}/transactions/prepare`,
						},
						{
							name: "Sending transactions",
							href: `${slug}/transactions/send`,
						},
						{
							name: "Extensions",
							href: `${slug}/extensions`,
							links: [
								{
									name: "Built-in extensions",
									href: `${slug}/extensions/built-in`,
								},
								{
									name: "Using extensions",
									href: `${slug}/extensions/use`,
								},
								{
									name: "Generating extensions",
									href: `${slug}/extensions/generate`,
								},
								{
									name: "Writing extensions",
									href: `${slug}/extensions/create`,
								},
							],
						},
					],
				},
				{
					name: "Full Reference",
					href: "/references/typescript/v5",
				},
				{
					separator: true,
				},
			],
		},
		{
			icon: <ReactIcon className="size-4" />,
			name: "React",
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: reactSlug,
				},
				{
					name: "Getting Started",
					href: `${reactSlug}/getting-started`,
				},
				{
					name: "Core",
					isCollapsible: false,
					links: [
						{
							name: "ThirdwebProvider",
							href: `${reactSlug}/ThirdwebProvider`,
						},
					],
				},
				{
					name: "Wallets",
					isCollapsible: false,
					links: [
						{
							name: "ConnectButton",
							href: `${reactSlug}/components/ConnectButton`,
						},
						{
							name: "ConnectEmbed",
							href: `${reactSlug}/components/ConnectEmbed`,
						},
						{
							name: "AutoConnect",
							href: `${reactSlug}/components/AutoConnect`,
						},
						{
							name: "Components",
							href: `${reactSlug}/components`,
							links: docs.components?.map((hook) => ({
								name: hook.name,
								href: hook.name,
							})),
						},
						{
							name: "Hooks",
							href: `${reactSlug}/connecting-wallets/hooks`,
							links: docs.hooks
								?.filter((hook) => {
									const [tag] = getCustomTag(hook) || [];
									return tag === "@walletConnection";
								})
								.map((hook) => ({
									name: hook.name,
									href: hook.name,
								})),
						},
					],
				},
				{
					name: "Blockchain API",
					isCollapsible: false,
					links: [
						{
							name: "Transactions Hooks",
							href: `${reactSlug}/transactions`,
						},
						{
							name: "Extensions",
							href: `${reactSlug}/extensions`,
						},
						{
							name: "TransactionButton",
							href: `${reactSlug}/components/TransactionButton`,
						},
						{
							name: "MediaRenderer",
							href: `${reactSlug}/components/MediaRenderer`,
						},
					],
				},
				{
					name: "Full Reference",
					href: "/references/typescript/v5/hooks",
				},
			],
		},
		{
			separator: true,
		},
		{
			icon: <ReactIcon className="size-4" />,
			name: "React Native",
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: reactNativeSlug,
				},
				{
					name: "Getting started",
					href: `${reactNativeSlug}/installation`,
				},
				{
					name: "Differences from React",
					href: `${reactNativeSlug}/differences`,
				},
			],
		},
		{
			separator: true,
		},
		{
			name: "Migration guide",
			href: `${slug}/migrate`,
		},
		{
			separator: true,
		},
	],
};
