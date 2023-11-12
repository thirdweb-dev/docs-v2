import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

export function Callout(props: {
	children: React.ReactNode;
	variant: "danger" | "warning" | "info";
	disableIcon?: boolean;
	title?: string;
}) {
	return (
		<div
			role="alert"
			className={cn(
				"my-5 flex flex-col gap-5 rounded-md border p-4 [&_*]:!m-0",
				props.variant === "danger" && "bg-danger-900 border-danger-500",
				props.variant === "warning" &&
					"bg-warning-900 border-warning-500 [&_code]:border-none [&_code]:bg-warning-800",
				props.variant === "info" &&
					"bg-accent-900 border border-accent-500 [&_code]:border-none [&_code]:bg-accent-700",
			)}
		>
			<div className="flex items-center gap-3">
				{!props.disableIcon && (
					<>
						{props.variant === "danger" && (
							<AlertTriangle className="h-6 w-6 shrink-0 text-danger-500" />
						)}

						{props.variant === "warning" && (
							<AlertCircle className="h-6 w-6 shrink-0 text-warning-500" />
						)}

						{props.variant === "info" && (
							<Info className="h-6 w-6 shrink-0 text-accent-500" />
						)}
					</>
				)}

				<h3 className="text-base font-semibold text-f-100">{props.title}</h3>
			</div>

			<div className="flex flex-col gap-2">{props.children}</div>
		</div>
	);
}
