import { cn } from "@/lib/utils";
import { Anchor } from "../ui/Anchor";

export function Heading(props: {
	children: React.ReactNode;
	id: string;
	as: "h1" | "h2" | "h3" | "h4";
}) {
	if (props.as === "h1") {
		return (
			<Anchor id={props.id} className="mb-5">
				<h1 className="text-3xl font-semibold tracking-tight text-f-100">
					{props.children}
				</h1>
			</Anchor>
		);
	}

	if (props.as === "h2") {
		return (
			<Anchor id={props.id} className="mb-3">
				<h2 className={"text-2xl font-semibold tracking-tight text-f-100"}>
					{props.children}
				</h2>
			</Anchor>
		);
	}

	if (props.as === "h3") {
		return (
			<Anchor id={props.id} className="mb-3">
				<h3 className={"text-lg font-semibold tracking-tight text-f-200"}>
					{props.children}
				</h3>
			</Anchor>
		);
	}
}
