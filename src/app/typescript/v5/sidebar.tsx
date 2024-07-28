import type { SideBar } from "../../../components/Layouts/DocLayout";
import { TypeScriptIcon } from "../../../icons";
import { fetchTypeScriptDoc } from "../../references/components/TDoc/fetchDocs/fetchTypeScriptDoc";
import { getCustomTag } from "../../references/components/TDoc/utils/getSidebarLinkgroups";

const slug = "/typescript/v5";
const docs = await fetchTypeScriptDoc("v5");

export const sidebar: SideBar = {
	name: "Connect Typescript SDK",
	links: [
		{
			icon: <TypeScriptIcon className="size-4" />,
			name: "TypeScript",
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
					name: "Why thirdweb?",
					href: `${slug}/why-thirdweb`,
				},
				{
					name: "Core",
					isCollapsible: false,
					links: [
						{
							name: "Client",
							href: `${slug}/client`,
							links: ["createThirdwebClient"].map((name) => ({
								name,
								href: `${slug}/${name}`,
							})),
						},
						{
							name: "Storage",
							href: `${slug}/storage`,
							links:
								docs.functions
									?.filter((f) => {
										const [tag] = getCustomTag(f) || [];
										return tag === "@storage";
									})
									?.map((f) => ({
										name: f.name,
										href: `${slug}/${f.name}`,
									})) || [],
						},
						{
							name: "Adapters",
							href: `${slug}/adapters`,
							links: ["viemAdapter", "ethers6Adapter", "ethers5Adapter"].map(
								(name) => ({
									name,
									href: `${slug}/${name}`,
								}),
							),
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
							})),
						},
						{
							name: "Auth (SIWE)",
							href: `${slug}/auth`,
							links:
								docs.functions
									?.filter((f) => {
										const [tag] = getCustomTag(f) || [];
										return tag === "@auth";
									})
									?.map((f) => ({
										name: f.name,
										href: `${slug}/${f.name}`,
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
								docs.functions
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
								docs.functions
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
							name: "Chain",
							href: `${slug}/chain`,
							links:
								docs.functions
									?.filter((f) => {
										const [tag] = getCustomTag(f) || [];
										return tag === "@chain";
									})
									?.map((f) => ({
										name: f.name,
										href: `${slug}/${f.name}`,
									})) || [],
						},
						{
							name: "Contract",
							href: `${slug}/contract`,
							links: [
								{
									name: "getContract",
									href: `${slug}/getContract`,
								},
							],
						},
						{
							name: "Reading state",
							href: `${slug}/transactions/read`,
							links: [
								{
									name: "readContract",
									href: `${slug}/readContract`,
								},
								{
									name: "prepareEvent",
									href: `${slug}/prepareEvent`,
								},
								{
									name: "getContractEvents",
									href: `${slug}/getContractEvents`,
								},
							],
						},
						{
							name: "Preparing transactions",
							href: `${slug}/transactions/prepare`,
							links: [
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
							})),
						},
						{
							name: "Sending transactions",
							href: `${slug}/transactions/send`,
							links: [
								"sendTransaction",
								"sendAndConfirmTransaction",
								"sendBatchTransaction",
								"waitForReceipt",
								"getTransactionStore",
							].map((name) => ({
								name,
								href: `${slug}/${name}`,
							})),
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
