"use client";

import { cn } from "@/lib/utils";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from "../ui/accordion";
import { Heading } from "./Heading";
import { useEffect, useState } from "react";

export function Details(props: {
	summary: React.ReactNode;
	children: React.ReactNode;
	level?: number;
	headingClassName?: string;
	id?: string;
	tags?: string[];
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const id =
		props.id || (typeof props.summary === "string" ? props.summary : "");

	useEffect(() => {
		const hash = window.location.hash;
		if (hash && hash === "#" + props.id) {
			setTimeout(() => {
				setIsExpanded(true);
			}, 500);
		}
	}, [props.id]);

	return (
		<Accordion type="multiple" value={isExpanded ? ["x"] : undefined}>
			<AccordionItem
				value="x"
				className="group/details my-4 border-b-0 border-l-2 transition-colors hover:border-accent-500"
			>
				<AccordionTrigger
					chevronPosition="left"
					className="flex px-3 py-1 text-accent-500 hover:border-f-300 hover:bg-b-800"
					onClick={() => {
						if (isExpanded) {
							setIsExpanded(!isExpanded);
						}
					}}
				>
					<Heading
						id={id || "#"}
						level={props.level || 5}
						anchorClassName="m-0"
						className={cn(
							"text-base md:text-base font-semibold text-accent-500 flex gap-3 text-left",
							props.headingClassName,
						)}
					>
						{props.summary}

						{props.tags && (
							<div className="flex items-center gap-2">
								{props.tags?.map((flag) => {
									return (
										<span
											className="rounded-lg border border-accent-700 bg-accent-900 px-2 py-1 text-xs text-accent-500"
											key={flag}
										>
											{flag}
										</span>
									);
								})}
							</div>
						)}
					</Heading>
				</AccordionTrigger>
				<AccordionContent>
					<div className="pl-4 pt-4">{props.children}</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
