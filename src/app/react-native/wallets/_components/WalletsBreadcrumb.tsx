import { Breadcrumb } from "@/components/Document";

export function WalletsBreadcrumb(props: { name: string; slug: string }) {
	return (
		<Breadcrumb
			crumbs={[
				{
					name: "React Native",
					href: "/react-native",
				},
				{
					name: "Wallets",
					href: "/react-native/wallets",
				},
				{
					name: props.name,
					href: `/react-native/wallets/${props.slug}`,
				},
			]}
		/>
	);
}
