import { CodeBlock } from "../Document/Code";
import { ArgType, LangType } from "./types";

export function FunctionSignatureCode(props: {
	name: string;
	args: ArgType[];
	returnType?: string;
	lang: LangType;
}) {
	let code = `${props.name}(\n`;

	if (props.lang === "go") {
		code = `func ` + code;
	}

	props.args.forEach((arg) => {
		code += `  ${arg.name}: ${arg.type}, \n`;
	});
	if (props.returnType) {
		if (props.lang === "go") {
			code += `) (${props.returnType}, error)`;
		} else if (props.lang === "python") {
			code += `) -> ${props.returnType}`;
		}
	} else {
		code += `)`;
	}

	return <CodeBlock lang={props.lang} code={code} />;
}
