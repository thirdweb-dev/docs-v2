export type NClassDoc = {
	kind: "class";
	name: string;
	description?: string;
	constructor?: NFunctionDoc;
	methods?: NFunctionDoc[];
	properties?: NPropertyDoc[];
};

export type NFunctionDoc = {
	kind: "function";
	name: string;
	description?: string;
	parameters?: NParameterDoc[];
	returns: {
		type?: string;
		description?: string;
	};
};

export type NPropertyDoc = {
	name: string;
	description?: string;
	type?: string;
};

export type NParameterDoc = {
	name: string;
	type?: string;
	description?: string;
};

export type NLang = "python" | "go";

export type SomeNDoc = NClassDoc | NFunctionDoc;

export type NRootDoc = {
	classes?: NClassDoc[];
	functions?: NFunctionDoc[];
};
