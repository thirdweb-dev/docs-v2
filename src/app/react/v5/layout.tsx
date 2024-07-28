import { DocLayout } from "@/components/Layouts/DocLayout";
import { createMetadata } from "@doc";
import { sidebar } from "./sidebar";
import { VersionSelector } from "../../../components/others/VersionSelector";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={sidebar}
			editPageButton={true}
			sidebarHeader={
				<div className="flex items-center gap-1">
					<p className="py-5 text-lg font-semibold text-f-100">Connect SDK</p>
					<VersionSelector
						versions={[
							{
								name: "v4",
								href: "/react/v4/",
							},
							{
								name: "v5",
								href: "/react/v5/",
							},
						]}
						selected={"v5"}
					/>
				</div>
			}
		>
			<div data-noindex>{props.children}</div>
		</DocLayout>
	);
}

export const metadata = createMetadata({
	title: "thirdweb React SDK",
	description:
		"A type-safe library to interact with any EVM-compatible blockchain in both Node.js and the browser.",
});
