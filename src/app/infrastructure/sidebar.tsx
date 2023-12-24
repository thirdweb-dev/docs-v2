import { SideBar } from "@/components/Layouts/DocLayout";
import { InfraEngineIcon, InfraRPCIcon, InfraStorageIcon } from "@/icons";

const engineSlug = "/infrastructure/engine";
const storageSlug = "/infrastructure/storage";
const rpcSlug = "/infrastructure/rpc-edge";

export const sidebar: SideBar = {
	name: "Infrastructure",
	links: [
		{
			name: "Overview",
			href: "/infrastructure",
		},
		{ separator: true },
		// Engine
		{
			name: "Engine",
			icon: <InfraEngineIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${engineSlug}/overview`,
				},
				{
					name: "Get Started",
					href: `${engineSlug}/get-started`,
				},
				{
					name: "Production Checklist",
					href: `${engineSlug}/production-checklist`,
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
							name: "Authentication",
							href: `${engineSlug}/features/authentication`,
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
						{
							name: "Meta-transaction Relayer",
							href: `${engineSlug}/guides/relayer`,
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
		//Storage
		{ separator: true },
		{
			name: "Storage",
			icon: <InfraStorageIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${storageSlug}/overview`,
				},
				{
					name: "How Storage Works",
					href: `${storageSlug}/how-storage-works`,
				},
				{
					name: "How to Use Storage",
					links: [
						{
							name: "Upload Files to IPFS",
							href: `${storageSlug}/how-to-use-storage/upload-files-to-ipfs`,
						},
						{
							name: "Host Web App",
							href: `${storageSlug}/how-to-use-storage/host-web-app`,
						},
					],
				},
				{
					name: "Storage SDK",
					href: `/storage-sdk/latest`,
				},
			],
		},
		//RPC Edge
		{ separator: true },
		{
			name: "RPC Edge",
			icon: <InfraRPCIcon />,
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${rpcSlug}/overview`,
				},
				{
					name: "Get Started",
					href: `${rpcSlug}/get-started`,
				},
			],
		},
	],
};
