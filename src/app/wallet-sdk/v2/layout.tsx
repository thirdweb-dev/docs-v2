import { DocLayout } from "@/components/Layouts/DocLayout";

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
						name: "Build a Wallet",
						href: "/wallet-sdk/v2/build",
						links: [
							{
								name: "Wallet interface",
								href: "/wallet-sdk/v2/build/connector",
							},
							{
								name: "ConnectWallet integration",
								href: "/wallet-sdk/v2/build/wallet-provider",
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
