import {
	ClassNDocType,
	FunctionNDocType,
	ParameterNDocType,
	NRootDocType,
} from "@/app/references/components/NDoc/types";
import doc from "./test/doc.json";

export type GoClassJSON = {
	typeName: string; // TODO: change to name
	fields: Array<{
		fieldName: string; // TODO: change to name
		fieldType: string; // TODO: change to type
	}>;
	methods: unknown; // no idea what it can be - there is no example of it in the json output
	comments: string | null;
};

export type GoFunctionJSON = {
	functionName: string;
	functionParams: Array<{
		paramName: string;
		paramType: string;
	}>;
	returnType: string;
	comments: string | null;
};

export type GoJSONRoot = {
	functions: Array<GoFunctionJSON>;
	types: Array<GoClassJSON>;
};

export async function fetchGoDoc() {
	return transformGoJSONToNDoc(doc as GoJSONRoot);
}

function transformGoJSONToNDoc(goRootJSON: GoJSONRoot): NRootDocType {
	const output: NRootDocType = {};

	if (goRootJSON.functions) {
		output.functions = goRootJSON.functions.map((fn) => {
			const funtionDoc: FunctionNDocType = {
				kind: "function",
				name: fn.functionName,
				description: fn.comments || undefined,
				parameters: fn.functionParams.map((param) => {
					const parameterDoc: ParameterNDocType = {
						name: param.paramName,
						description: undefined,
						type: param.paramType,
					};

					return parameterDoc;
				}),
				returns: {
					description: undefined,
					type: fn.returnType,
				},
			};

			return funtionDoc;
		});
	}

	if (goRootJSON.types) {
		output.classes = goRootJSON.types.map((cls) => {
			const classDoc: ClassNDocType = {
				kind: "class",
				name: cls.typeName,
				description: cls.comments || undefined,
				properties: cls.fields.map((field) => {
					const parameterDoc: ParameterNDocType = {
						name: field.fieldName,
						description: undefined,
						type: field.fieldType,
					};

					return parameterDoc;
				}),
				constructor: undefined,
				methods: undefined, // TODO, we don't know what type methods are, because json output doesn't have any example of it
			};

			return classDoc;
		});
	}

	return output;
}
