"use client";

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from "../ui/accordion";
import { Heading } from "./Heading";

export function Details(props: {
	summary: React.ReactNode;
	children: React.ReactNode;
	level?: number;
}) {
	return (
		<Accordion type="multiple">
			<AccordionItem value="x">
				<AccordionTrigger className="py-2 pr-3">
					<Heading
						id="returns"
						level={props.level || 5}
						anchorClassName="m-0 py-2"
						className="text-base font-normal text-f-200 hover:text-f-100"
					>
						{props.summary}
					</Heading>
				</AccordionTrigger>
				<AccordionContent>{props.children}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
