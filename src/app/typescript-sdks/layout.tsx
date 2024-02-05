import { createMetadata } from "@doc";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<main className="container grow py-10" data-noindex>
			{props.children}
		</main>
	);
}

export const metadata = createMetadata({
	title: "thirdweb TypeScript SDKs",
	description:
		"A type-safe library to interact with any EVM-compatible blockchain in both Node.js and the browser.",
});
