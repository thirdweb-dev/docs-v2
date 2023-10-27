import { CodeBlock, InlineCode } from "@/components/Document/Code";
import { DocLink } from "@/components/Document/DocLink";
import { Heading } from "@/components/Document/Heading";
import { UnorderedList, OrderedList } from "@/components/Document/List";
import { Paragraph } from "@/components/Document/Paragraph";
import { Separator } from "@/components/Document/Separator";
import {
	Table,
	TableDataCell,
	TableHeadingCell,
	TableRow,
} from "@/components/Document/Table";
import type { MDXComponents } from "mdx/types";
import { Lang } from "shiki";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	function getHeading(
		as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
		props: {
			children?: React.ReactNode;
			id?: string;
		},
	) {
		return (
			<Heading as={as} id={props.id || nameToLink(props.children) || ""}>
				{props.children}
			</Heading>
		);
	}

	return {
		...components,
		a(props) {
			const { href, children, ...restProps } = props;
			return <DocLink href={href || ""}>{children}</DocLink>;
		},
		h1(props) {
			return getHeading("h1", props);
		},
		h2(props) {
			return getHeading("h2", props);
		},
		h3(props) {
			return getHeading("h3", props);
		},
		h4(props) {
			return getHeading("h4", props);
		},
		h5(props) {
			return getHeading("h5", props);
		},
		h6(props) {
			return getHeading("h6", props);
		},
		code(props) {
			const code = props.children;
			const lang = props.className?.replace("language-", "");
			const isInline = props.className;

			if (!props.className) {
				return <InlineCode code={typeof code === "string" ? code : ""} />;
			}

			return (
				<CodeBlock
					lang={lang as Lang}
					code={typeof code === "string" ? code : ""}
				/>
			);
		},
		p(props) {
			return <Paragraph>{props.children}</Paragraph>;
		},
		ul(props) {
			return <UnorderedList> {props.children}</UnorderedList>;
		},
		ol(props) {
			return <OrderedList>{props.children}</OrderedList>;
		},
		hr() {
			return <Separator />;
		},
		table(props) {
			return <Table>{props.children}</Table>;
		},
		th(props) {
			return <TableHeadingCell>{props.children}</TableHeadingCell>;
		},
		td(props) {
			return <TableDataCell>{props.children}</TableDataCell>;
		},
		tr(props) {
			return <TableRow>{props.children}</TableRow>;
		},
	};
}

function nameToLink(name: React.ReactNode) {
	if (typeof name !== "string") {
		return undefined;
	}

	return `${name
		.toLowerCase()
		// replaces dashes with spaces
		.replace(/\s/g, "-")
		// removes special characters
		.replace(/[^a-z0-9-]/g, "")
		// remove numbers or dashes from the start of the string
		.replace(/^[0-9-]+/, "")}`;
}
