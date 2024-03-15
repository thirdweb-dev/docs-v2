import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export function GithubTemplateCard(props: { title: string; href: string }) {
	return (
		<Link href={props.href} target="_blank" className="flex cursor-default">
			<article className="group/article flex w-full items-center overflow-hidden rounded-lg border bg-b-800 transition-colors duration-300 hover:border-accent-500 hover:bg-accent-900">
				<div className="flex w-full items-center gap-3 p-4">
					<BsGithub className="size-5 shrink-0" />
					<h3 className="text-base font-medium">{props.title}</h3>
				</div>
			</article>
		</Link>
	);
}
