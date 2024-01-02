export function Grid(props: { children: React.ReactNode }) {
	return (
		<div className="my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{props.children}
		</div>
	);
}
