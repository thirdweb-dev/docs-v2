import { headerHeight } from "@/constants";

export function Anchor(props: { id: string; children: React.ReactNode }) {
	return (
		<div className="group flex items-center gap-2" id={props.id}>
			{props.children}
			<a
				aria-hidden
				href={`#${props.id}`}
				style={{
					scrollMarginTop: headerHeight + 200 + "px",
				}}
				className="text-xl text-accent-500 no-underline opacity-0 transition-opacity group-hover:opacity-100"
			>
				#
			</a>
		</div>
	);
}
