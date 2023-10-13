export type GoType = {
	typeName: string; // TODO: change to name
	fields: Array<{
		fieldName: string; // TODO: change to name
		fieldType: string; // TODO: change to type
	}>;
	methods: unknown; // no idea what it can be - there is no example of it in the json output
	comments: string | null;
};

export type GoReference = {
	functions: Array<{
		functionName: string;
		functionParams: Array<{
			paramName: string;
			paramType: string;
		}>;
		returnType: string;
		comments: string | null;
	}>;
	// TODO: change to classes
	types: Array<GoType>;
};
