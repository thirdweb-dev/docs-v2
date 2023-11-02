import FlexSearch from "flexsearch";

export type PageSectionData = {
	/**
	 * section title
	 */
	title?: string;
	/**
	 * section href to scroll to the section
	 */
	href?: string;
	/**
	 * section content
	 */
	content: string;
};

export type PageData = {
	/**
	 * document href to navigate to the document
	 */
	href: string;
	/**
	 * document title (h1)
	 */
	title?: string;
	/**
	 * document sections
	 */
	sections?: PageSectionData[];
};

export type PageIndex = FlexSearch.Document<
	{
		id: number;
		title: string;
		content: string;
	},
	["title", "content"]
>;

export type SectionIndex = FlexSearch.Document<
	{
		id: number;
		title: string;
		content: string;
	},
	["title", "content"]
>;
