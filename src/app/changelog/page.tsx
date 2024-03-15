import { Heading } from "@/components/Document";
import { fetchChangeLogs } from "./ghost";
import { Author } from "./components/Author";
import Link from "next/link";
import { RenderDate } from "./components/RenderData";
import { createMetadata } from "@doc";

export const metadata = createMetadata({
	title: "Changelog",
	description:
		"View the latest updates and changes in thirdweb SDKs and services",
	image: {
		title: "thirdweb Changelog",
		icon: "changelog",
	},
});

export default async function Page() {
	const posts = await fetchChangeLogs();

	return (
		<div>
			<Heading level={1} id="title">
				Changelog
			</Heading>

			<div className="flex flex-col gap-3">
				{posts.map((post) => {
					return (
						<Link href={`/changelog/${post.slug}`} key={post.id}>
							<div className="rounded-lg border bg-b-900 p-5 transition-colors hover:border-accent-500 hover:bg-accent-900">
								<h2 className="mb-1 text-lg font-semibold">{post.title}</h2>
								{post.published_at && <RenderDate iso={post.published_at} />}
								<div className="mt-3 flex gap-5">
									{post.authors?.map((author) => {
										return (
											<Author
												name={author.name || ""}
												profileImage={author.profile_image}
												key={author.id}
											/>
										);
									})}
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
