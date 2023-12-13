"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Feedback() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	if (!isSubmitted) {
		return (
			<div className="flex flex-col gap-3 md:h-16 md:flex-row md:items-center md:gap-5">
				<p>Was this page helpful?</p>

				<div className="flex gap-3">
					<Button
						variant="outline"
						onClick={() => {
							setIsSubmitted(true);
						}}
					>
						Yes
						<ThumbsUpIcon className="h-4 w-4 text-f-300" />
					</Button>

					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">
								No
								<ThumbsDownIcon className="h-4 w-4 text-f-300" />
							</Button>
						</DialogTrigger>

						<DialogContent className="p-5">
							<h3 className="mb-3 text-lg text-f-100">
								{" "}
								Apologies for any confusion.{" "}
							</h3>
							<p className="mb-3 text-f-300" placeholder="Your feedback...">
								Please provide details about the issue you encountered to help
								us improve our documentation.
							</p>
							<textarea className="mb-2 h-32 w-full rounded-sm border bg-b-700 p-2 text-f-300 outline-none"></textarea>
							<div className="flex flex-row-reverse">
								<Button
									className="mt-3"
									onClick={() => {
										setIsSubmitted(true);
									}}
								>
									Submit
								</Button>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		);
	}
	return (
		<div className="duration-500 animate-in fade-in-0">
			<div className="flex items-center gap-2 text-accent-500 md:h-16">
				<BadgeCheckIcon />
				<p className="font-semibold text-accent-500">
					Thank you for your feedback!
				</p>
			</div>
		</div>
	);
}
