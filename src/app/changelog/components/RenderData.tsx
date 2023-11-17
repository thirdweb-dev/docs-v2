import { formatHumanReadableDate } from "../utils/formatHumanReadableDate";

export function RenderDate(props: { iso: string }) {
	return (
		<time dateTime={props.iso} className="text-sm text-f-300">
			{formatHumanReadableDate(props.iso)}
		</time>
	);
}
