import { SideBar } from "@/components/Layouts/DocLayout";
import { InfraEngineIcon } from "@/icons";

const engineSlug = "/engine";

export const sidebar: SideBar = {
	name: "Engine",
	links: [
		{
			name: "Overview",
			href: "/engine",
		},
		{ separator: true },
		// Engine
		{
			name: "Engine",
			icon: <InfraEngineIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Get Started",
					href: `${engineSlug}/get-started`,
				},
				{
					name: "Production Checklist",
					href: `${engineSlug}/production-checklist`,
				},
				{
					name: "Self-Host",
					href: `${engineSlug}/self-host`,
				},
				{
					name: "Features",
					links: [
						{
							name: "Backend Wallets",
							href: `${engineSlug}/features/backend-wallets`,
						},
						{
							name: "Contracts",
							href: `${engineSlug}/features/contracts`,
						},
						{
							name: "Permissions",
							href: `${engineSlug}/features/permissions`,
						},
						{
							name: "Webhooks",
							href: `${engineSlug}/features/webhooks`,
						},
						{
							name: "Smart Wallets",
							href: `${engineSlug}/features/smart-wallets`,
						},
						{
							name: "Relayers",
							href: `${engineSlug}/features/relayers`,
						},
						{
							name: "Gasless Transactions",
							href: `${engineSlug}/features/gasless-transactions`,
						},
					],
				},
				{
					name: "Guides",
					links: [
						{ name: "Airdrop NFTs", href: `${engineSlug}/guides/airdrop-nfts` },
						{ name: "NFT Checkout", href: `${engineSlug}/guides/nft-checkout` },
						{
							name: "Smart Wallets & Session Keys",
							href: `${engineSlug}/guides/smart-wallets`,
						},
					],
				},
				{
					name: "References",
					links: [
						{
							name: "API Reference",
							href: `${engineSlug}/references/api-reference`,
						},
						{
							name: "Typescript SDK",
							href: `${engineSlug}/references/typescript`,
						},
					],
				},
				{
					name: "Security",
					href: `${engineSlug}/security`,
				},
				{
					name: "FAQ",
					href: `${engineSlug}/faq`,
				},
			],
		},
	],
};
