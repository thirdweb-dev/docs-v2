"use client";

export function HitButton() {
	return (
		<button
			className="rounded p-4 outline"
			onClick={() => {
				fetch("/api/debug").then(async (res) => {
					console.log(await res.json());
				});
			}}
		>
			Debug API
		</button>
	);
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<HitButton />
		</main>
	);
}
