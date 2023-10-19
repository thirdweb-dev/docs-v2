import { cn } from "@/lib/utils";

export function Paragraph(props: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p className={cn("text-base leading-7 text-f-200 my-3", props.children)}>
			{" "}
			{props.children}
		</p>
	);
}
