import { DocLink } from "../Document/DocLink";

export function SourceLink(props: { href: string }) {
	return (
		<div className="mb-8">
			<DocLink href={props.href} className="text-sm">
				<span className="text-sm text-f-300"> Defined in </span>
				{props.href.split("/packages/")[1]}
			</DocLink>
		</div>
	);
}
