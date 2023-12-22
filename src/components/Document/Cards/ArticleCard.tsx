import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export function ArticleCard(props: {
	title: string;
	description: string;
	image?: StaticImport;
	href: string;
}) {
	return (
		<Link href={props.href} className="flex cursor-default bg-b-800">
			<article className="group/article overflow-hidden rounded-lg border transition-colors duration-300 hover:border-accent-500">
				{props.image && (
					<div className="h-40 overflow-hidden">
						<Image
							src={props.image}
							alt={""}
							className="h-full w-full object-cover transition-transform duration-300 group-hover/article:scale-125"
						/>
					</div>
				)}

				<div className="p-4">
					<h3 className="mb-4 text-lg font-semibold">{props.title}</h3>
					<p className="text-f-300">{props.description}</p>
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
