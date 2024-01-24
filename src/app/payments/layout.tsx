import { DocLayout } from "@/components/Layouts/DocLayout";
import { sidebar } from "./sidebar";
import { createMetadata } from "@/components/Document";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout sideBar={sidebar} editPageButton={true}>
			{props.children}
		</DocLayout>
	);
}

export const metadata = createMetadata({
	title: "thirdweb Payments",
	description:
		"thirdweb payments delivers the easiest NFT payments experience for you and your buyers",
});
