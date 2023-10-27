import { cn } from "@/lib/utils";
import { Anchor } from "../ui/Anchor";

export function Heading(props: {
	children: React.ReactNode;
	id: string;
	level: number;
	className?: string;
	anchorClassName?: string;
}) {
	switch (props.level) {
		case 1: {
			return (
				<Anchor id={props.id} className={cn("mb-5", props.anchorClassName)}>
					<h1
						className={cn(
							"text-4xl font-bold tracking-tight text-f-100",
							props.className,
						)}
					>
						{props.children}
					</h1>
				</Anchor>
			);
		}

		case 2: {
			return (
				<Anchor
					id={props.id}
					className={cn("mb-3 mt-12", props.anchorClassName)}
				>
					<h2
						className={cn(
							"text-3xl font-semibold tracking-tight text-f-100",
							props.className,
						)}
					>
						{props.children}
					</h2>
				</Anchor>
			);
		}

		case 3: {
			return (
				<Anchor
					id={props.id}
					className={cn("mb-3 mt-10", props.anchorClassName)}
				>
					<h3
						className={cn("text-2xl font-semibold text-f-200", props.className)}
					>
						{props.children}
					</h3>
				</Anchor>
			);
		}

		case 4: {
			return (
				<Anchor
					id={props.id}
					className={cn("mb-3 mt-5", props.anchorClassName)}
				>
					<h4
						className={cn("text-xl font-semibold text-f-200", props.className)}
					>
						{props.children}
					</h4>
				</Anchor>
			);
		}

		case 5: {
			return (
				<Anchor
					id={props.id}
					className={cn("mb-3 mt-8", props.anchorClassName)}
				>
					<h5
						className={cn("text-lg font-semibold text-f-200", props.className)}
					>
						{props.children}
					</h5>
				</Anchor>
			);
		}

		default: {
			return (
				<Anchor
					id={props.id}
					className={cn("mb-3 mt-8", props.anchorClassName)}
				>
					<h6
						className={cn("text-lg font-semibold text-f-200", props.className)}
					>
						{props.children}
					</h6>
				</Anchor>
			);
		}
	}
}
