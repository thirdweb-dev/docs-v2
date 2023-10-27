import { cn } from "@/lib/utils";
import { Anchor } from "../ui/Anchor";

export function Heading(props: {
	children: React.ReactNode;
	id: string;
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	anchorClassName?: string;
}) {
	if (props.as === "h1") {
		return (
			<Anchor id={props.id} className={cn("mb-5", props.anchorClassName)}>
				<h1
					className={cn(
						"text-3xl font-bold tracking-tight text-f-100",
						props.className,
					)}
				>
					{props.children}
				</h1>
			</Anchor>
		);
	}

	if (props.as === "h2") {
		return (
			<Anchor id={props.id} className={cn("mb-3 mt-12", props.anchorClassName)}>
				<h2
					className={cn(
						"text-2xl font-semibold tracking-tight text-f-100",
						props.className,
					)}
				>
					{props.children}
				</h2>
			</Anchor>
		);
	}

	if (props.as === "h3") {
		return (
			<Anchor id={props.id} className={cn("mb-3 mt-10", props.anchorClassName)}>
				<h3 className={cn("text-xl font-semibold text-f-200", props.className)}>
					{props.children}
				</h3>
			</Anchor>
		);
	}

	if (props.as === "h4") {
		return (
			<Anchor id={props.id} className={cn("mb-3 mt-8", props.anchorClassName)}>
				<h4 className={cn("text-lg font-semibold text-f-200", props.className)}>
					{props.children}
				</h4>
			</Anchor>
		);
	}

	if (props.as === "h5") {
		return (
			<Anchor id={props.id} className={cn("mb-3 mt-8", props.anchorClassName)}>
				<h5 className={cn("text-lg font-semibold text-f-200", props.className)}>
					{props.children}
				</h5>
			</Anchor>
		);
	}

	if (props.as === "h6") {
		return (
			<Anchor id={props.id} className={cn("mb-3 mt-8", props.anchorClassName)}>
				<h6 className={cn("text-lg font-semibold text-f-200", props.className)}>
					{props.children}
				</h6>
			</Anchor>
		);
	}
}
