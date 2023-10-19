import { Anchor } from "../ui/Anchor";

export function Heading(props: {
	children: React.ReactNode;
	id: string;
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
	if (props.as === "h1") {
		return (
			<Anchor id={props.id} className="mb-5">
				<h1 className="text-3xl font-bold tracking-tight text-f-100">
					{props.children}
				</h1>
			</Anchor>
		);
	}

	if (props.as === "h2") {
		return (
			<Anchor id={props.id} className="mb-3 mt-12">
				<h2 className={"text-2xl font-semibold tracking-tight text-f-100"}>
					{props.children}
				</h2>
			</Anchor>
		);
	}

	if (props.as === "h3") {
		return (
			<Anchor id={props.id} className="mb-3 mt-10">
				<h3 className={"text-xl font-semibold text-f-200"}>{props.children}</h3>
			</Anchor>
		);
	}

	if (props.as === "h4") {
		return (
			<Anchor id={props.id} className="mb-3 mt-8">
				<h4 className={"text-lg font-semibold text-f-200"}>{props.children}</h4>
			</Anchor>
		);
	}

	if (props.as === "h5") {
		return (
			<Anchor id={props.id} className="mb-3 mt-8">
				<h5 className={"text-lg font-semibold text-f-200"}>{props.children}</h5>
			</Anchor>
		);
	}

	if (props.as === "h6") {
		return (
			<Anchor id={props.id} className="mb-3 mt-8">
				<h6 className={"text-lg font-semibold text-f-200"}>{props.children}</h6>
			</Anchor>
		);
	}
}
