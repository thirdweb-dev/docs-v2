import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export function ArticleCard(props: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<Link href={props.href} className="flex cursor-default bg-b-800">
			<article className="group/article w-full overflow-hidden rounded-lg border-2 transition-colors duration-300 hover:border-accent-500 hover:bg-accent-900">
				<div className="p-4">
					<h3 className="mb-2 text-base font-semibold">{props.title}</h3>
					<p className="text-sm text-f-300">{props.description}</p>
				</div>
			</article>
		</Link>
	);
}

export function ArticleIconCard(props: {
	title: string;
	description: string;
	href: string;
	image?: StaticImport;
	icon?: React.FC<{ className?: string }>;
}) {
	return (
		<Link
			href={props.href}
			className="flex min-h-[120px] items-center gap-4 rounded-lg border bg-b-800 px-5 transition-colors hover:border-accent-500 hover:bg-accent-900"
		>
			{props.icon && <props.icon className="h-10 w-10 shrink-0" />}
			{props.image && (
				<Image src={props.image} alt={""} className="h-10 w-10 shrink-0" />
			)}
			<div className="flex flex-col gap-1">
				<h3 className="text-lg font-semibold text-f-100">{props.title}</h3>
				<p className="text-f-300">{props.description}</p>
			</div>
		</Link>
	);
}
