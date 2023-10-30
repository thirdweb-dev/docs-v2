export function Table(props: { children: React.ReactNode }) {
	return (
		<table className="my-5 w-full table-auto border-collapse text-sm">
			{props.children}
		</table>
	);
}

export function Tr(props: { children: React.ReactNode }) {
	return (
		<tr className="border-b p-4 pb-3 pl-8 pt-0 text-left font-medium text-f-200 dark:border-b-700">
			{props.children}
		</tr>
	);
}

export function Th(props: { children: React.ReactNode }) {
	return (
		<th className="border-b p-4 pb-3 pl-8 pt-0 text-left font-medium text-f-200 [&>p]:m-0">
			{props.children}
		</th>
	);
}

export function Td(props: { children: React.ReactNode }) {
	return (
		<td className="border-b p-4 pl-8 text-f-200 [&>p]:m-0">{props.children}</td>
	);
}
