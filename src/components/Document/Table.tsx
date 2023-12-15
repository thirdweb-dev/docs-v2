export function Table(props: { children: React.ReactNode }) {
	return (
		<div className="mb-7 overflow-hidden rounded-lg border ">
			<table className="styled-scrollbar w-full border-collapse overflow-auto text-sm [&_tr:last-of-type]:border-none">
				{props.children}
			</table>
		</div>
	);
}

export function Tr(props: { children: React.ReactNode }) {
	return (
		<tr className="border-b p-4 pb-3 pl-8 pt-0 text-left font-medium text-f-200">
			{props.children}
		</tr>
	);
}

export function TBody(props: { children: React.ReactNode }) {
	return <tbody className="w-full rounded-lg ">{props.children}</tbody>;
}

export function Th(props: { children: React.ReactNode }) {
	return (
		<th className="border-b bg-b-700 p-4 pb-3 pl-8 text-left text-base font-semibold text-f-100">
			{props.children}
		</th>
	);
}

export function Td(props: { children: React.ReactNode }) {
	return (
		<td className="p-4 pl-8 text-base leading-7 text-f-200">
			{props.children}
		</td>
	);
}
