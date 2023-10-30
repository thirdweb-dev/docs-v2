"use client";

import {
	AccordionItem as Item,
	AccordionTrigger as Trigger,
	AccordionHeader as Header,
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
	...props
}) => {
	const chvronPosition = props.chevronPosition || "right";

	return (
		<Header className="flex">
			<Trigger
				className={cn(
					"flex flex-1 items-center gap-4 py-4 transition-all [&[data-state=open]>svg]:rotate-180",
					className,
					chvronPosition == "right" && "justify-between flex-row-reverse",
				)}
				style={style}
				{...props}
			>
				<ChevronDown className="ease h-4 w-4 shrink-0 transition-transform duration-300" />
				{props.id ? <Anchor id={props.id}> {children} </Anchor> : children}
			</Trigger>
		</Header>
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
			"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
			className,
		)}
		{...props}
	>
		<div className="pb-4 pt-0">{children}</div>
	</Content>
);

export const Accordion = Root;
