"use client";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import type { PropertyType } from "./types";
import { Anchor } from "../ui/Anchor";

export function Properties(props: { properties: PropertyType[] }) {
	return (
		<div>
			<Anchor id="properties">
				<h2 className="text-3xl text-accent-500"> Properties </h2>
			</Anchor>

			<div className="h-5" />

			<Accordion type="multiple">
				<div className="flex flex-col gap-4">
					{props.properties.map((property) => {
						return (
							<AccordionItem
								value={property.name}
								key={property.name}
								className="rounded-md border px-5"
							>
								<AccordionTrigger
									id={property.name}
									className="font-mono text-lg"
								>
									{property.name}
								</AccordionTrigger>

								<AccordionContent>
									<div className="flex flex-col gap-8 pb-4 pr-8 text-base">
										{/* Description */}
										{property.description && (
											<div className="text-lg leading-7 text-f-200">
												{property.description}
											</div>
										)}

										{property.type && (
											<div>
												{property.type && (
													<>
														<h4 className="mb-2 text-sm uppercase leading-loose tracking-widest text-f-200">
															Type
														</h4>
														<code className="inline-flex rounded-md border bg-b-800 p-2 font-mono text-f-100">
															{property.type}
														</code>
													</>
												)}
											</div>
										)}
									</div>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</div>
			</Accordion>
		</div>
	);
}
