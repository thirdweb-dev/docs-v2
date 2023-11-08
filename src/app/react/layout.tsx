import { DocLayout } from "@/components/Layouts/DocLayout";
import { TableOfContentsSideBar } from "@/components/others/TableOfContents";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={{
				name: "React SDK",
				links: [
					{
						name: "Overview",
						href: "/react",
					},
					{
						name: "Getting Started",
						href: "/react/getting-started",
					},
					{
						name: "ThirdwebProvider",
						href: "/react/thirdweb-provider",
					},
				],
			}}
		>
			<main className="relative w-full overflow-hidden pb-10 pt-6">
				{props.children}
			</main>
			<TableOfContentsSideBar />
		</DocLayout>
	);
}
