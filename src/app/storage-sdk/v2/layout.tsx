import { createMetadata } from "@/components/Document";
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

export const metadata = createMetadata({
	image: {
		title: "thirdweb Storage SDK",
		icon: "storage",
	},
	title: "thirdweb Storage SDK",
	description: "Reference documentation for the thirdweb Storage SDK",
});
