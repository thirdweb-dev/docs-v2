import { formatHumanReadableDate } from "../utils/formatHumanReadableDate";

export function RenderDate(props: { iso: string }) {
	return (
		<time dateTime={props.iso} className="text-sm font-medium text-f-300">
			{formatHumanReadableDate(props.iso)}
		</time>
	);
}
