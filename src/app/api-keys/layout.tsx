import { DocLayout } from "@/components/Layouts/DocLayout";

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<DocLayout
			sideBar={{
				name: "API Keys",
				links: [
					{
						name: "Overview",
						href: "/api-keys",
					},
					{
						name: "Create API Key",
						href: "/api-keys/create",
					},
					{
						name: "Use API Key",
						href: "/api-keys/use",
					},
					{
						name: "Edit enabled services",
						href: "/api-keys/edit-services",
					},
					{
						name: "Delete API Key",
						href: "/api-keys/delete",
					},
					{
						name: "Access Restrictions",
						href: "/api-keys/access",
					},
					{
						name: "Services",
						href: "/api-keys/services",
					},
					{
						name: "FAQs",
						href: "/api-keys/faq",
					},
				],
			}}
			editPageButton={true}
		>
			{props.children}
		</DocLayout>
	);
}
