import { createMetadata } from "@/components/Document";
import { DocLayout } from "@/components/Layouts/DocLayout";

export const metadata = createMetadata({
	title: "thirdweb Wallet SDK",
	description:
		"The Wallet SDK allows you to build a fully featured wallet solution or integrate an existing wallet provider with thirdweb's Typescript, React, React Native, and Unity SDKs.",
});

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={{
				name: "Wallet SDK",
				links: [
					{
						name: "Overview",
						href: "/wallet-sdk/v2",
					},
					{
						name: "Usage",
						href: "/wallet-sdk/v2/usage",
					},
					{
						name: "Wallets",
						href: "/wallet-sdk/v2/wallets",
					},
					{
						name: "Build a Wallet",
						href: "/wallet-sdk/v2/build",
						links: [
							{
								name: "Wallet interface",
								href: "/wallet-sdk/v2/build/connector",
							},
							{
								name: "ConnectWallet integration",
								href: "/wallet-sdk/v2/build/connect-wallet-integration",
							},
						],
					},
					{
						name: "Full Reference",
						href: "/references/wallets/v2",
					},
				],
			}}
			editPageButton={true}
		>
			{props.children}
		</DocLayout>
	);
}
