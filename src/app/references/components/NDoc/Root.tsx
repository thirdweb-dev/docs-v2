import { ClassNDoc } from "./Class";
import { FunctionNDoc } from "./Function";
import { NLang, SomeNDocType } from "./types";

export function RootNDoc(props: { doc: SomeNDocType; lang: NLang }) {
	switch (props.doc.kind) {
		case "function": {
			return (
				<FunctionNDoc
					doc={props.doc}
					lang={props.lang}
					level={1}
					slugPrefix=""
				/>
			);
		}
		case "class": {
			return <ClassNDoc doc={props.doc} lang={props.lang} level={1} />;
		}
	}
}
