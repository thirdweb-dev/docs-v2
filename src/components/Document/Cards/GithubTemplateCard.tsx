import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export function GithubTemplateCard(props: { title: string; href: string }) {
	return (
		<Link href={props.href} target="_blank" className="flex cursor-default">
			<article className="group/article flex w-full items-center overflow-hidden rounded-lg border-2 bg-b-800 transition-colors duration-300 hover:border-accent-500 hover:bg-accent-900">
				<div className="flex w-full items-center gap-3 p-4">
					<BsGithub className="h-5 w-5 shrink-0" />
					<h3 className="text-base font-semibold">{props.title}</h3>
					<ExternalLinkIcon className="ml-auto h-4 w-4 shrink-0 text-f-300" />
				</div>
			</article>
		</Link>
	);
}
