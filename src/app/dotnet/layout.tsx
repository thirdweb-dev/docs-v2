import { DocLayout } from "@/components/Layouts/DocLayout";
import { sidebar } from "./sidebar";
import { createMetadata } from "@/components/Document";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout sideBar={sidebar} editPageButton={true}>
			{props.children}
		</DocLayout>
	);
}

export const metadata = createMetadata({
	image: {
		title: "thirdweb Unity SDK",
		icon: "unity",
	},
	title: "thirdweb Unity SDK",
	description:
		"Connect to user's wallets, interact with smart contracts, sign messages, and utilize common standards such as tokens, NFTs, marketplaces; all with built-in RPC URLs, IPFS gateways, and more.",
});
