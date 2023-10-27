import { RenderFunctionDoc } from "./RenderFunctionDoc";
import { SomeDoc } from "./types";

export function RenderDoc(props: { doc: SomeDoc }) {
	if (props.doc.kind === "function") {
		return <RenderFunctionDoc doc={props.doc} />;
	}
}
