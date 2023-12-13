export function Grid(props: { children: React.ReactNode }) {
	return (
		<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{props.children}
		</div>
	);
}
