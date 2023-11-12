import { Breadcrumb } from "@/components/Document";

export function WalletsBreadcrumb(props: { name: string; slug: string }) {
	return (
		<Breadcrumb
			crumbs={[
				{
					name: "React",
					href: "/react",
				},
				{
					name: "Wallets",
					href: "/react/wallets",
				},
				{
					name: props.name,
					href: `/react/wallets/${props.slug}`,
				},
			]}
		/>
	);
}
