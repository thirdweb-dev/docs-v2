import { Button } from "@/components/ui/button";
import Link from "next/link";

const references = [
	{
		name: "Python SDK",
		href: "/python/references",
	},
	{
		name: "Go SDK",
		href: "/go/references",
	},
];

export default function Page() {
	return (
		<main className="flex grow flex-col gap-4 p-8">
			<h1 className="text-3xl"> References </h1>
			{references.map((reference) => {
				return (
					<Button asChild key={reference.name}>
						<Link href="/python/references"> {reference.name} </Link>
					</Button>
				);
			})}
		</main>
	);
}
