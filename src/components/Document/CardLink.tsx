import { GraduationCap, Layers2Icon } from "lucide-react";
import Link from "next/link";

export function CardLink(props: {
	icon: "educate" | "contract";
	href: string;
	label: string;
}) {
	const iconClassName = "h-8 w-8 text-accent-500";

	return (
		<Link
			href={props.href}
			className="my-4 flex items-center gap-4 rounded-lg border bg-b-800 p-4 text-sm duration-200 hover:border-accent-500"
		>
			{props.icon === "educate" && <GraduationCap className={iconClassName} />}
			{props.icon === "contract" && <Layers2Icon className={iconClassName} />}

			<div className="text-base text-f-100">{props.label}</div>
		</Link>
	);
}
