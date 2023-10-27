import { DocLink } from "../Document/DocLink";

export function SourceLink(props: { href: string }) {
	return (
		<DocLink href={props.href} className="mb-5 block text-sm">
			<span className="text-sm text-f-300"> Defined in </span>
			{props.href.split("/packages/")[1]}
		</DocLink>
	);
}
