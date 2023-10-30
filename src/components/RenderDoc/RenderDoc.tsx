import { sluggerContext } from "@/contexts/slugger";
import { RenderClassDoc } from "./RenderClassDoc";
import { RenderEnumDoc } from "./RenderEnumDoc";
import { RenderFunctionDoc } from "./RenderFunctionDoc";
import { RenderInterfaceDoc } from "./RenderInterfaceDoc";
import { RenderVariableDoc } from "./RenderVariableDoc";
import { SomeDoc } from "./types";
import GithubSlugger from "github-slugger";

export function RenderDoc(props: { doc: SomeDoc }) {
	sluggerContext.set(new GithubSlugger());

	switch (props.doc.kind) {
		case "function": {
			return <RenderFunctionDoc doc={props.doc} level={1} />;
		}
		case "class": {
			return <RenderClassDoc doc={props.doc} />;
		}

		case "variable": {
			return <RenderVariableDoc doc={props.doc} level={1} />;
		}

		case "type": {
			return <RenderInterfaceDoc doc={props.doc} level={1} />;
		}

		case "enum": {
			return <RenderEnumDoc doc={props.doc} level={1} />;
		}

		default: {
			return <div>TODO</div>;
		}
	}
}
