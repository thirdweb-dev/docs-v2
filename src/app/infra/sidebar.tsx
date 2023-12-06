import { SideBar } from "@/components/Layouts/DocLayout";
import { InfraEngineIcon, InfraRPCIcon, InfraStorageIcon } from "@/icons";

const engineSlug = "/infrastructure/engine";
const storageSlug = "/infrastructure/storage";
const rpcSlug = "/infrastructure/rpc-edge";

export const sidebar: SideBar = {
	name: "Wallets",
	links: [
		{
			name: "Overview",
			href: "/contracts",
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
			],
		},
	],
};
