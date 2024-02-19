import { GithubButtonLink } from "./GithubButtonLink";
import { Paragraph } from "./Paragraph";

export function OpenSourceCard(props: {
	description?: string;
	title: string;
	href: string;
}) {
	return (
		<div className="my-4 rounded-lg border-2 bg-b-900 p-4">
			<div className="mb-1 text-lg font-semibold ">
				{props.title || "Open Source"}
			</div>
			<Paragraph className="mb-5 text-f-300">
				{props.description ||
					`${props.title} is open-source. You can view the source code and
				contribute to it on GitHub`}
			</Paragraph>
			<div className="flex">
				<GithubButtonLink href={props.href} />
			</div>
		</div>
	);
}
