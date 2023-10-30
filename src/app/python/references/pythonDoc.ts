import { LinkGroup } from "@/components/others/Sidebar";
import references from "./test/doc.json";
import { NClassDoc, NRootDoc } from "@/components/NonTypeDoc/types";
import {
	processPythonDocstring,
	cleanPythonType,
} from "@/components/NonTypeDoc/temp";

type PythonClassJSON = {
	typeName: string; // TODO: change to name
	fields: {
		fieldName: string; // TODO: change to name
		fieldType: string; // TODO: change to type
	}[];
	methods: {
		// TODO: change to name
		functionName: string;
		// TODO: change to params
		functionParams: {
			paramName: string;
			paramType: string;
		}[];
		returnType: string;
		comments: string | null;
	}[];
	comments: string | null;
};

export type PythonJSON = {
	// TODO: change to classes
	types: PythonClassJSON[];
};

export async function fetchPythonNDoc() {
	return transformToNDoc(references as PythonJSON);
}

function transformToNDoc(pythonJSON: PythonJSON): NRootDoc {
	const output: NRootDoc = {};

	output.classes = pythonJSON.types.map((cls) => {
		const classDoc: NClassDoc = {
			kind: "class",
			name: cls.typeName,
			description: cls.comments || undefined,
			constructor: undefined,
			methods: cls.methods.map((method) => {
				const docStringInfo = method.comments
					? processPythonDocstring(method.comments)
					: undefined;

				return {
					kind: "function",
					description: docStringInfo?.description,
					name: method.functionName,
					parameters: method.functionParams
						.filter((w) => w.paramName !== "self")
						.map((fParam, i) => {
							return {
								name: fParam.paramName,
								type: cleanPythonType(fParam.paramType),
								description: docStringInfo?.params
									? docStringInfo.params[i]?.description
									: undefined,
							};
						}),
					returns: {
						description: docStringInfo?.returns?.description,
						type: method.returnType,
					},
				};
			}),
			properties: cls.fields.map((field) => {
				return {
					name: field.fieldName,
					type: cleanPythonType(field.fieldType),
				};
			}),
		};

		return classDoc;
	});

	return output;
}
