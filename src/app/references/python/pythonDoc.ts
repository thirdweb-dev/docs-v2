import references from "./test/doc.json";
import {
	ClassNDocType,
	NRootDocType,
} from "@/app/references/components/NDoc/types";
import {
	processPythonDocstring,
	cleanPythonType,
} from "@/app/references/components/NDoc/tempUtils";

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

function transformToNDoc(pythonJSON: PythonJSON): NRootDocType {
	const output: NRootDocType = {};

	output.classes = pythonJSON.types.map((cls) => {
		const classDoc: ClassNDocType = {
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
					parameters: method.functionParams.map((fParam, i) => {
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
