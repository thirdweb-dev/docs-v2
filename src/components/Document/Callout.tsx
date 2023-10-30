import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, Link } from "lucide-react";

export function Callout(props: {
	children: React.ReactNode;
	variant: "danger" | "warning" | "info";
	disableIcon?: boolean;
}) {
	return (
		<div
			role="alert"
			className={cn(
				"my-5 flex gap-4 items-center rounded-md border p-4 [&_p]:!m-0",
				props.variant === "danger" && "bg-danger-900 border-danger-500",
				props.variant === "warning" &&
					"bg-warning-900 border-warning-500 [&_code]:border-none [&_code]:bg-warning-800",
				props.variant === "info" && "bg-b-900 border",
			)}
		>
			{!props.disableIcon && (
				<>
					{props.variant === "danger" && (
						<AlertTriangle className="h-6 w-6 shrink-0 text-danger-500" />
					)}

					{props.variant === "warning" && (
						<AlertCircle className="h-6 w-6 shrink-0 text-warning-500" />
					)}

					{props.variant === "info" && (
						<Link className="h-6 w-6 shrink-0 text-accent-500" />
					)}
				</>
			)}

			{props.children}
		</div>
	);
}
