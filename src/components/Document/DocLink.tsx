import Link from "next/link";

export function DocLink(props: { href: string; children: React.ReactNode }) {
	return (
		<Link
			href={props.href}
			className="text-accent-500 hover:text-f-100 "
			target={props.href.startsWith("http") ? "_blank" : undefined}
		>
			{props.children}
		</Link>
	);
}
