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

export type SideBarLink = {
	name: string;
	href: string;
};

export type ReferenceLayoutProps = {
	lang: LangType;
	sideBar: {
		name: string;
		links: {
			classes?: SideBarLink[];
			functions?: SideBarLink[];
		};
		activeLink?: string;
	};
	crumbs: Array<{
		name: string;
		href: string;
	}>;
	customContent?: React.ReactNode;
	selected?:
		| {
				type: "class";
				name: string;
				description?: string;
				methods?: MethodType[];
				properties?: PropertyType[];
		  }
		| {
				type: "function";
				name: string;
				description?: string;
				return?: {
					type: string;
					description?: string;
				};
				args?: ArgType[];
		  };
};
