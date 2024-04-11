import type { SideBar } from "../../../components/Layouts/DocLayout";
import { TypeScriptIcon, ReactIcon } from "../../../icons";

const slug = "/typescript/v5";
const reactSlug = `${slug}/react`;

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
			name: "Core",
			isCollapsible: false,
			links: [
				{
					name: "Client",
					href: `${slug}/client`,
				},
				{
					name: "Chain",
					href: `${slug}/chain`,
				},
				{
					name: "Contract",
					href: `${slug}/contract`,
				},
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
					name: "Transactions",
					href: `${slug}/transactions`,
					links: [
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
					],
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
				{
					name: "Adapters",
					href: `${slug}/adapters`,
				},
				{
					name: "Storage",
					href: `${slug}/storage`,
				},
				{
					name: "Auth",
					href: `${slug}/auth`,
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
					name: "ThirdwebProvider",
					href: `${reactSlug}/ThirdwebProvider`,
				},
				{
					name: "Connecting Wallets",
					href: `${reactSlug}/connecting-wallets`,
				},
				{
					name: "UI Components",
					href: `${reactSlug}/components`,
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
					name: "Transactions",
					href: `${reactSlug}/transactions`,
				},
				{
					name: "Extensions",
					href: `${reactSlug}/extensions`,
				},
				{
					name: "Hooks",
					href: `/references/typescript/v5/hooks`,
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
		{
			name: "Full Reference",
			href: "/references/typescript/v5",
		},
	],
};
