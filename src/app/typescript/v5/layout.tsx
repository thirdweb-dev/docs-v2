import { DocLayout } from "@/components/Layouts/DocLayout";
import { createMetadata } from "@doc";
import { sidebar } from "./sidebar";
import { TypeScriptVersionSelector } from "../../../components/others/VersionSelector";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={sidebar}
			editPageButton={true}
			sidebarHeader={<TypeScriptVersionSelector selected="v5" />}
		>
			<div data-noindex>{props.children}</div>
		</DocLayout>
	);
}

export const metadata = createMetadata({
	title: "thirdweb TypeScript SDK",
	description:
		"A type-safe library to interact with any EVM-compatible blockchain in both Node.js and the browser.",
});
