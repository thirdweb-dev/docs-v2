import { cn } from "@/lib/utils";

export function Anchor(props: {
	id: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"group flex scroll-mt-offset-top items-center gap-2",
				props.className,
			)}
			id={props.id}
		>
			{props.children}
			<a
				aria-hidden
				href={`#${props.id}`}
				className="text-xl text-accent-500 no-underline opacity-0 transition-opacity group-hover:opacity-100"
			>
				#
			</a>
		</div>
	);
}
