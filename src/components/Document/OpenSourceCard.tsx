import { GithubButtonLink } from "./GithubButtonLink";
import { Paragraph } from "./Paragraph";

export function OpenSourceCard(props: {
	description?: string;
	repoName: string;
	repoUrl: string;
}) {
	return (
		<div className="my-5 rounded-lg border bg-b-800 p-4">
			<div className="mb-2 text-lg font-semibold ">
				{props.repoName || "Open Source"}
			</div>
			<Paragraph className="mb-3 text-f-300">
				{props.description ||
					`The ${props.repoName} is open-source. You can view the source code and
				contribute to it on GitHub`}
			</Paragraph>
			<GithubButtonLink href={props.repoUrl} />
		</div>
	);
}
