import type { SideBar } from "../../../components/Layouts/DocLayout";
import { ReactIcon } from "../../../icons";

const slug = "/typescript/v5";
const reactSlug = `${slug}/react`;

export const sidebar: SideBar = {
	name: "TypeScript Unified SDK",
	links: [
		{
			name: "Overview",
			href: slug,
		},
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
			name: "Transactions",
			href: `${slug}/transactions`,
		},
		{
			name: "Wallets",
			href: `${slug}/wallets`,
		},
		{
			name: "Extensions",
			href: `${slug}/extensions`,
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
			separator: true,
		},
		{
			// isCollapsible: false,
			icon: <ReactIcon className="size-4" />,
			name: "React",
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
					name: "Wallets (React)",
					href: `${reactSlug}/wallets`,
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
							name: "TransactionButton",
							href: `${reactSlug}/components/TransactionButton`,
						},
					],
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
