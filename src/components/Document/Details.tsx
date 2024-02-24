"use client";

import { cn } from "@/lib/utils";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from "../ui/accordion";
import { useEffect, useState } from "react";
import { Anchor } from "../ui/Anchor";

export function Details(props: {
	summary: React.ReactNode;
	children: React.ReactNode;
	level?: number;
	headingClassName?: string;
	id?: string;
	tags?: string[];
	noIndex?: boolean;
	startExpanded?: boolean;
	accordionItemClassName?: string;
	accordionTriggerClassName?: string;
}) {
	const [isExpanded, setIsExpanded] = useState(props.startExpanded ?? false);
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
		<Accordion
			type="multiple"
			value={isExpanded ? ["x"] : undefined}
			data-noindex={props.noIndex}
		>
			<AccordionItem
				value="x"
				className={cn(
					"group/details my-4 border-b-0 border-l-2 transition-colors hover:border-accent-500",
					props.accordionItemClassName,
				)}
			>
				<AccordionTrigger
					chevronPosition="left"
					className={cn(
						"flex px-3 py-1 text-accent-500 hover:border-f-300 hover:bg-b-800",
						props.accordionTriggerClassName,
					)}
					onClick={() => {
						if (isExpanded) {
							setIsExpanded(!isExpanded);
						}
					}}
				>
					<Anchor id={id || "#"} className={"m-0 flex gap-3"}>
						<h4
							className={cn(
								"text-lg font-bold tracking-tight text-f-100 break-all",
								"font-semibold text-accent-500 flex gap-3 text-left w-full",
								props.headingClassName,
							)}
						>
							{props.summary}
						</h4>
						{props.tags && props.tags.length > 0 && (
							<div className="ml-auto flex items-center gap-2">
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
					</Anchor>
				</AccordionTrigger>

				<AccordionContent data-collapsible>
					<div className="pl-4 pt-4 [&>:first-child]:mt-0">
						{props.children}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
