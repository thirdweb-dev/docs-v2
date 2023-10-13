export type PythonReference = {
	// TODO: change to classes
	types: {
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
	}[];
};
