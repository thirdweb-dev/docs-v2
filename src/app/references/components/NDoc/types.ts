export type ClassNDocType = {
	kind: "class";
	name: string;
	description?: string;
	constructor?: FunctionNDocType;
	methods?: FunctionNDocType[];
	properties?: PropertyNDocType[];
};

export type FunctionNDocType = {
	kind: "function";
	name: string;
	description?: string;
	parameters?: ParameterNDocType[];
	returns: {
		type?: string;
		description?: string;
	};
};

export type PropertyNDocType = {
	name: string;
	description?: string;
	type?: string;
};

export type ParameterNDocType = {
	name: string;
	type?: string;
	description?: string;
};

export type NLang = "python" | "go";

export type SomeNDocType = ClassNDocType | FunctionNDocType;

export type NRootDocType = {
	classes?: ClassNDocType[];
	functions?: FunctionNDocType[];
};
