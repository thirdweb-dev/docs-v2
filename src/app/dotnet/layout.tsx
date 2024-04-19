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
		title: "thirdweb .NET SDK",
		icon: "dotnet",
	},
	title: "thirdweb .NET SDK",
	description:
		"Connect to user's wallets, interact with smart contracts, sign in with email or phone number, unlock Account Abstraction features; all with built-in RPC URLs, IPFS gateways, Godot support and more.",
});
