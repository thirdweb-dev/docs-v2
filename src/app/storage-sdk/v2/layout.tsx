import { DocLayout } from "@/components/Layouts/DocLayout";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={{
				name: "Storage SDK",
				links: [
					{
						name: "Overview",
						href: "/storage-sdk/v2",
					},
					{
						name: "Full Reference",
						href: "/references/storage/v2",
					},
				],
			}}
			editPageButton={true}
		>
			{props.children}
		</DocLayout>
	);
}
