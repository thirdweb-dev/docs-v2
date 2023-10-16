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

export async function fetchPythonReference() {
	const res = await fetch(
		"https://cf-ipfs.com/ipfs/QmYXoK9hbdvEK11ymHnXaYFXRxAfseFcQHcXW16d4PT82T/python_output.json",
	);

	if (!res.ok) {
		throw new Error("Failed to fetch python references");
	}

	return (await res.json()) as PythonReference;
}
