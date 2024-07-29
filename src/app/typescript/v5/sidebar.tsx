import type { FunctionDoc } from "typedoc-better-json";
import type { SideBar } from "../../../components/Layouts/DocLayout";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";
import { Book, CodeIcon, ZapIcon } from "lucide-react";

const slug = "/typescript/v5";
const docs = await fetchTypeScriptDoc("v5");

export const sidebar: SideBar = {
	name: "Connect Typescript SDK",
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
		{ separator: true },
		{
			name: "Core",
			isCollapsible: false,
			links: [
				{
					name: "Client",
					href: `${slug}/client`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/client`,
						},
						...["createThirdwebClient"].map((name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						})),
					],
				},
				{
					name: "Storage",
					href: `${slug}/storage`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/storage`,
						},
						...(docs.functions
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@storage";
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
								icon: <CodeIcon />,
							})) || []),
					],
				},
				{
					name: "Adapters",
					href: `${slug}/adapters`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/adapters`,
						},
						...["viemAdapter", "ethers6Adapter", "ethers5Adapter"].map(
							(name) => ({
								name,
								href: `${slug}/${name}`,
								icon: <CodeIcon />,
							}),
						),
					],
				},
			],
		},
		{ separator: true },
		{
			name: "Wallets",
			isCollapsible: false,
			links: [
				{
					name: "Overview",
					href: `${slug}/wallets`,
				},
				{
					name: "Supported Wallets",
					href: `${slug}/supported-wallets`,
				},
				{
					name: "External Wallets",
					links: [
						"createWallet",
						"createWalletAdapter",
						"privateKeyToAccount",
						"generateAccount",
						"injectedProvider",
					].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
				{
					name: "In-App Wallets",
					links: [
						"inAppWallet",
						"preAuthenticate",
						"getUserEmail",
						"getUserPhoneNumber",
						"hasStoredPasskey",
					].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
				{
					name: "Ecosystem Wallets",
					links: [
						"ecosystemWallet",
						"preAuthenticate",
						"getUserEmail",
						"getUserPhoneNumber",
						"hasStoredPasskey",
					].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
				{
					name: "Account Abstraction",
					links: [
						"smartWallet",
						"createUnsignedUserOp",
						"signUserOp",
						"bundleUserOp",
						"waitForUserOpReceipt",
					].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
				{
					name: "Auth (SIWE)",
					href: `${slug}/auth`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/auth`,
						},
						...(docs.functions
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@auth";
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
		{ separator: true },
		{
			name: "Pay",
			isCollapsible: false,
			links: [
				{
					name: "Buy with Fiat",
					links:
						docs.functions
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
						docs.functions
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
		{ separator: true },
		{
			name: "Blockchain API",
			isCollapsible: false,
			links: [
				{
					name: "Chains",
					href: `${slug}/chain`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/chain`,
						},
						...(docs.functions
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@chain";
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
								icon: <CodeIcon />,
							})) || []),
					],
				},
				{
					name: "Contracts",
					href: `${slug}/contract`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/contract`,
						},
						...[
							"getContract",
							"getBytecode",
							"verifyContract",
							"resolveContractAbi",
							"fetchPublishedContract",
							"resolveMethod",
							"detectMethod",
						].map((name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						})),
					],
				},
				{
					name: "Reading state",
					href: `${slug}/transactions/read`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/transactions/read`,
						},
						...["readContract", "prepareEvent", "getContractEvents"].map(
							(name) => ({
								name,
								href: `${slug}/${name}`,
								icon: <CodeIcon />,
							}),
						),
					],
				},
				{
					name: "Preparing transactions",
					href: `${slug}/transactions/prepare`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/transactions/prepare`,
						},
						...[
							"prepareContractCall",
							"prepareTransaction",
							"encode",
							"signTransaction",
							"simulateTransaction",
							"estimateGas",
							"estimateGasCost",
							"toSerializableTransaction",
							"serializeTransaction",
						].map((name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						})),
					],
				},
				{
					name: "Sending transactions",
					href: `${slug}/transactions/send`,
					links: [
						{
							name: "Introduction",
							icon: <Book />,
							href: `${slug}/transactions/send`,
						},
						...[
							"sendTransaction",
							"sendAndConfirmTransaction",
							"sendBatchTransaction",
							"waitForReceipt",
							"getTransactionStore",
						].map((name) => ({
							name,
							href: `${slug}/${name}`,
							icon: <CodeIcon />,
						})),
					],
				},
				{
					name: "Deploying contracts",
					links:
						docs.functions
							?.filter((f) => {
								const [tag, extensionName] = getCustomTag(f) || [];
								return tag === "@extension" && extensionName === "DEPLOY";
							})
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((f) => ({
								name: f.name,
								href: `${slug}/deploy/${f.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
				{
					name: "Extensions",
					href: `${slug}/extensions/use`,
					links: [
						{
							name: "Using Extensions",
							href: `${slug}/extensions/use`,
							icon: <Book />,
						},
						{
							name: "Generating Extensions",
							href: `${slug}/extensions/generate`,
							icon: <Book />,
						},
						{
							name: "Writing Extensions",
							href: `${slug}/extensions/create`,
							icon: <Book />,
						},
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
				{
					name: "RPC",
					links:
						docs.functions
							?.filter((f) => {
								const [tag] = getCustomTag(f) || [];
								return tag === "@rpc";
							})
							?.map((f) => ({
								name: f.name,
								href: `${slug}/${f.name}`,
								icon: <CodeIcon />,
							})) || [],
				},
				{
					name: "Utils",
					links: [
						"toEther",
						"toTokens",
						"toWei",
						"toUnits",
						"shortenAddress",
						"shortenHex",
						"encodeAbiParameters",
						"encodePacked",
						"sha256",
						"keccak256",
						"keccakId",
					].map((name) => ({
						name,
						href: `${slug}/${name}`,
						icon: <CodeIcon />,
					})),
				},
			],
		},
		{
			separator: true,
		},
		{
			name: "Migrate from v4",
			href: `${slug}/migrate`,
		},
		{
			name: "Full Reference",
			href: "/references/typescript/v5",
		},
	],
};
