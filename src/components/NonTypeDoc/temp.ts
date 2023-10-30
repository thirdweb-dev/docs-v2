// These utils are only for temporary use
// this should be done at the doc generation time

export function cleanPythonType(str: string) {
	if (str.startsWith("<class '") && str.endsWith("'>")) {
		return str.slice(8, -2);
	}

	if (str.startsWith("<enum '") && str.endsWith("'>")) {
		return str.slice(7, -2);
	}

	return str;
}

export function cleanPythonParameterType(type: string, name: string) {
	const typeIncludesArgName = type && type.includes(name);
	return cleanPythonType(
		typeIncludesArgName && type ? type.slice(name.length + 1) : type,
	).trim();
}

export function processPythonDocstring(docString: string) {
	const [description, rest] = docString.split("\n\n");
	const _params = rest?.split("\n").map((line) => {
		const [nameAndType, paramDescription] = line.split(":").filter((w) => w);
		const [name, type] = (nameAndType || "").split(" ");
		return {
			name: name?.trim(),
			type: type ? cleanPythonType(type).trim() : undefined,
			description: paramDescription?.trim(),
		};
	});

	const params = _params?.filter((p) => p.name !== "returns");
	const returns = _params?.find((p) => p.name === "returns");

	return {
		description,
		params,
		returns,
	};
}
