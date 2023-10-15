export type GoClassRef = {
	typeName: string; // TODO: change to name
	fields: Array<{
		fieldName: string; // TODO: change to name
		fieldType: string; // TODO: change to type
	}>;
	methods: unknown; // no idea what it can be - there is no example of it in the json output
	comments: string | null;
};

export type GoFunctionRef = {
	functionName: string;
	functionParams: Array<{
		paramName: string;
		paramType: string;
	}>;
	returnType: string;
	comments: string | null;
};

export type GoReference = {
	functions: Array<GoFunctionRef>;
	types: Array<GoClassRef>;
};

export async function fetchGoReference() {
	const res = await fetch(
		"https://cf-ipfs.com/ipfs/QmbHv4kipbGqt2LV7knv17s8syFqhh4HdXeN4cEU1V6AVA/go-output.json",
	);

	if (!res.ok) {
		throw new Error("Failed to fetch go references");
	}

	return (await res.json()) as GoReference;
}
