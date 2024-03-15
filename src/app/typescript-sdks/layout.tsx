import { createMetadata } from "@doc";
import { DocLayout } from "../../components/Layouts/DocLayout";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={{
				name: "TypeScript SDKs",
				links: [
					{
						name: "TypeScript SDK",
						href: "/typescript/v4",
					},
					{
						name: "React SDK",
						href: "/react/v4",
					},
					{
						name: "React Native SDK",
						href: "/react-native/v0",
					},
					{
						name: "Wallet SDK",
						href: "/wallet-sdk/v2",
					},
					{
						name: "Storage SDK",
						href: "/storage-sdk/v2",
					},
				],
			}}
			showTableOfContents={false}
		>
			{" "}
			{props.children}
		</DocLayout>
	);
}

export const metadata = createMetadata({
	title: "thirdweb TypeScript SDKs",
	description:
		"A type-safe library to interact with any EVM-compatible blockchain in both Node.js and the browser.",
});
