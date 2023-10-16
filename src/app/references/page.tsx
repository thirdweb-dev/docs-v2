import Link from "next/link";

export default function Page() {
	return (
		<main className="flex grow flex-col gap-6 p-6">
			<Link href="/python/references">Python SDK</Link>
			<Link href="/go/references">Go SDK</Link>
		</main>
	);
}
