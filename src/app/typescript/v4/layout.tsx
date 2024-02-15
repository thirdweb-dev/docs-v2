import { DocLayout } from "@/components/Layouts/DocLayout";
import { sidebar } from "./sidebar";
import { createMetadata } from "@doc";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout sideBar={sidebar} editPageButton={true}>
			{props.children}
		</DocLayout>
	);
}

export const metadata = createMetadata({
	image: {
		title: "thirdweb TypeScript Alpha SDK",
		icon: "typescript",
	},
	title: "thirdweb TypeScript SDK",
	description:
		"A type-safe library to interact with any EVM-compatible blockchain in both Node.js and the browser.",
});
