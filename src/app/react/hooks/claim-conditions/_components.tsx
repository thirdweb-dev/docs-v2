import { Breadcrumb } from "@/components/Document";

export function ClaimConditionsBreadcrumb(props: {
	name: string;
	slug: string;
}) {
	return (
		<Breadcrumb
			crumbs={[
				{ name: "React", href: "/react" },
				{ name: "Hooks", href: "/react/hooks" },
				{ name: "Claim Conditions", href: "/react/hooks/claim-conditions" },
				{ name: props.name, href: `/react/claim-conditions/${props.slug}` },
			]}
		/>
	);
}
