import { DocLayout } from "@/components/Layouts/DocLayout";
import { createMetadata } from "@doc";

const slug = "/typescript/v5";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={{
				name: "TypeScript",
				links: [
					{
						name: "Overview",
						href: slug,
					},
					{
						name: "Client",
						href: `${slug}/client`,
					},
					{
						name: "Contract",
						href: `${slug}/contract`,
					},
					{
						name: "Transactions",
						href: `${slug}/transactions`,
					},
					{
						name: "Wallets",
						href: `${slug}/wallets`,
					},
					{
						name: "Extensions",
						href: `${slug}/extensions`,
					},
					{
						name: "Full Reference",
						href: "/references/typescript/v5",
					},
				],
			}}
			editPageButton={true}
		>
			<div data-noindex>{props.children}</div>
		</DocLayout>
	);
}

export const metadata = createMetadata({
	title: "thirdweb Alpha TypeScript SDK",
	description:
		"A type-safe library to interact with any EVM-compatible blockchain in both Node.js and the browser.",
});
