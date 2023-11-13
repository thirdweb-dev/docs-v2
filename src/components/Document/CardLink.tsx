import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function CardLink(props: {
	icon: "educate";
	href: string;
	label: string;
}) {
	return (
		<Link
			href={props.href}
			className="flex items-center gap-4 rounded-lg border bg-b-800 p-4 text-sm duration-200 hover:border-accent-500"
		>
			{props.icon === "educate" && (
				<GraduationCap className="h-8 w-8 text-accent-500" />
			)}
			<div className="text-base text-f-100">{props.label}</div>
		</Link>
	);
}
