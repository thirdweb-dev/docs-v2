import { ArgType, LangType } from "./types";

export function FunctionSignatureCode(props: {
	name: string;
	args: ArgType[];
	returnType?: string;
	lang: LangType;
}) {
	return (
		<code className="styled-scrollbar flex max-w-full flex-col overflow-x-auto rounded-md border bg-b-800 p-3 font-mono text-sm leading-relaxed text-f-100">
			<span className="text-f-200"> {props.name}( </span>
			<div className="pl-5">
				{props.args.map((arg) => {
					return (
						<div key={arg.name} className="flex gap-2">
							<span className="text-accent-500">{arg.name}</span>
							<span>{arg.type}</span>
						</div>
					);
				})}
			</div>
			<span className="text-f-200">
				){" "}
				{props.returnType && (
					<FormatReturnType lang={props.lang} returnType={props.returnType} />
				)}
			</span>
		</code>
	);
}

function FormatReturnType(props: { lang: LangType; returnType: string }) {
	// TODO: I'm just assuming that return type also includes the error type - because its missing in JSON output
	if (props.lang === "go") {
		return (
			<>
				(<span className="text-f-100">{props.returnType}</span>,{" "}
				<span className="text-f-100">error</span>)
			</>
		);
	}

	if (props.lang === "python") {
		return (
			<>
				<span className="text-f-200"> {` -> `}</span>
				<span className="text-f-100">{props.returnType}</span>
			</>
		);
	}
}
