import { RenderNClassDoc } from "./RenderNClassDoc";
import { RenderNFunctionDoc } from "./RenderNFunctionDoc";
import { NLang, SomeNDoc } from "./types";

export function RenderNDoc(props: { doc: SomeNDoc; lang: NLang }) {
	switch (props.doc.kind) {
		case "function": {
			return (
				<RenderNFunctionDoc
					doc={props.doc}
					lang={props.lang}
					level={1}
					slugPrefix=""
				/>
			);
		}
		case "class": {
			return <RenderNClassDoc doc={props.doc} lang={props.lang} level={1} />;
		}
	}
}
