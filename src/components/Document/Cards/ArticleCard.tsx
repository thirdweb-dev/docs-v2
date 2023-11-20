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
				<div className="h-40 overflow-hidden">
					{props.image && (
						<Image
							src={props.image}
							alt={""}
							className="h-full object-cover transition-transform duration-300 group-hover/article:scale-125"
						/>
					)}
				</div>

				<div className="p-5">
					<h3 className="mb-3 text-lg font-semibold">{props.title}</h3>
					<p className="text-f-300">{props.description}</p>
				</div>
			</article>
		</Link>
	);
}
