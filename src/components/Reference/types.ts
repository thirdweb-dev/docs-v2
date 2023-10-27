export type MethodType = {
	name: string;
	description?: string;
	args?: ArgType[];
	return?: {
		type?: string;
	};
};

export type PropertyType = {
	name: string;
	description?: string;
	type?: string;
};

export type ArgType = {
	name: string;
	type?: string;
	description?: string;
};

export type LangType = "python" | "go" | "ts";

export type LinkMeta = {
	name: string;
	href: string;
};

export type LinkGroup = {
	group: string;
	links: LinkMeta[];
};
