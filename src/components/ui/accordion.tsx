"use client";

import {
	AccordionItem as Item,
	AccordionTrigger as Trigger,
	// AccordionHeader as Header,
	AccordionContent as Content,
	Accordion as Root,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Anchor } from "./Anchor";

export const AccordionItem: React.FC<
	React.ComponentPropsWithoutRef<typeof Item>
> = ({ className, ...props }) => (
	<Item className={cn("border-b", className)} {...props} />
);

type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof Trigger> & {
	id?: string;
	chevronPosition?: "left" | "right";
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
	className,
	children,
	style,
	chevronPosition: _chevronPosition,
	...props
}) => {
	const chvronPosition = _chevronPosition || "right";

	return (
		<Trigger
			className={cn(
				"flex flex-1 items-center gap-3 py-4 transition-all [&[data-state=open]>svg]:rotate-180 w-full",
				className,
				chvronPosition === "right" ? "justify-between flex-row-reverse" : "",
			)}
			style={style}
			{...props}
		>
			<ChevronDown className="ease size-4 shrink-0 transition-transform duration-300" />
			{props.id ? <Anchor id={props.id}> {children} </Anchor> : children}
		</Trigger>
	);
};

type AccordionContentProps = React.ComponentPropsWithoutRef<typeof Content>;

export const AccordionContent: React.FC<AccordionContentProps> = ({
	className,
	children,
	...props
}) => (
	<Content
		className={cn(
			"overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
			className,
		)}
		{...props}
	>
		<div className="pb-4 pt-0">{children}</div>
	</Content>
);

export const Accordion = Root;
