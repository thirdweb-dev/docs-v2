/* eslint-disable @next/next/no-img-element */

import { fetchChangeLogs, fetchPost } from "../ghost";
import ReactHtmlParser from "react-html-parser";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import "./styles.css";
import { Author } from "../components/Author";
import { RenderDate } from "../components/RenderData";
import { transform } from "../utils/transform";

export default async function Page(props: {
	params: {
		slug: string;
	};
}) {
	const data = (await fetchPost(props.params.slug))[0];

	if (!data) {
		notFound();
	}

	return (
		<div>
			{data.updated_at && (
				<div className="mb-10">
					<RenderDate iso={data.updated_at} />
				</div>
			)}

			<h1
				className={cn(
					"text-4xl md:text-5xl font-bold tracking-tight text-f-100 break-words mb-8",
				)}
			>
				{data.title}
			</h1>

			<div className="mb-5 flex items-center gap-5">
				{data.authors?.map((author) => {
					if (!author.name) {
						return null;
					}

					return (
						<Author
							name={author.name}
							profileImage={author.profile_image}
							key={author.id}
						/>
					);
				})}
			</div>

			<div className="mb-8 border-t-2"></div>

			{ReactHtmlParser(data.html || "", {
				transform,
			})}
		</div>
	);
}

export async function generateStaticParams() {
	const changelogs = await fetchChangeLogs();

	return changelogs.map((changelog) => {
		return {
			slug: changelog.slug,
		};
	});
}
