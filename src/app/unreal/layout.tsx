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
	image: {
		title: "thirdweb Unreal SDK",
		icon: "unreal",
	},
	title: "thirdweb Unreal SDK",
	description:
		"Seamlessly create In-App Wallets, sign in with email or socials, unlock Account Abstraction features and more.",
});
