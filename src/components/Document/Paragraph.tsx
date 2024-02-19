import { cn } from "@/lib/utils";

export function Paragraph(props: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p
			className={cn(
				"text-base leading-7 text-f-200 mb-3 font-medium",
				props.className,
			)}
		>
			{props.children}
		</p>
	);
}
