import { BlockTag } from "typedoc-better-json";
import { Callout } from "../Document/Callout";
import { RenderSummary } from "./Summary";

export function Deprecated(props: { tag: BlockTag }) {
	return (
		<Callout variant="warning" disableIcon>
			<div className="flex w-full flex-col gap-2 ">
				<div className="text-lg font-semibold"> Deprecated </div>
				<div>
					{props.tag.summary && <RenderSummary summary={props.tag.summary} />}
				</div>
			</div>
		</Callout>
	);
}
