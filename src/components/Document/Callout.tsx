import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle } from "lucide-react";

export function Callout(props: {
	children: React.ReactNode;
	variant: "danger" | "warning";
}) {
	return (
		<div
			role="alert"
			className={cn(
				"mb-5 flex items-center gap-4 rounded-md border p-4",
				props.variant === "danger" && "bg-danger-900 border-danger-500",
				props.variant === "warning" && "bg-warning-900 border-warning-500",
			)}
		>
			{props.variant === "danger" && (
				<AlertTriangle className="h-6 w-6 shrink-0 text-danger-500" />
			)}

			{props.variant === "warning" && (
				<AlertCircle className="h-6 w-6 shrink-0 text-warning-500" />
			)}
			<h5 className="text-f-100">{props.children}</h5>
		</div>
	);
}
