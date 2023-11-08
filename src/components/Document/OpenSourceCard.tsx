import { GithubButtonLink } from "./GithubButtonLink";
import { Paragraph } from "./Paragraph";

export function OpenSourceCard(props: { repoName: string; repoUrl: string }) {
	return (
		<div className="my-5 rounded-lg border bg-b-800 p-4">
			<div className="mb-2 text-lg font-semibold "> Open Source </div>
			<Paragraph className="mb-3 text-f-300">
				The {props.repoName} is open-source. You can view the source code and
				contribute to it on GitHub
			</Paragraph>
			<GithubButtonLink href={props.repoUrl} />
		</div>
	);
}
