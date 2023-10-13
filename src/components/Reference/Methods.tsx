"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { LangType, MethodType } from "./types";
import { Anchor } from "../ui/Anchor";
import { FunctionSignatureCode } from "./SignatureCode";

export function Methods(props: { methods: MethodType[]; lang: LangType }) {
	return (
		<div>
			<Anchor id="methods">
				<h2 className="text-3xl text-accent-500"> Methods </h2>
			</Anchor>

			<div className="h-5"></div>

			<Accordion type="multiple">
				<div className="flex flex-col gap-4">
					{props.methods.map((method) => {
						// TODO: remove this once the json is fixed
						let returnType = method.return?.type;
						if (
							returnType?.startsWith("<class '") &&
							returnType?.endsWith("'>")
						) {
							returnType = returnType.slice(8, -2);
						}

						// TODO: remove this once the json is fixed
						const args = method.args
							?.filter((arg) => arg.name !== "self")
							.map((arg) => {
								const typeIncludesArgName =
									arg.type && arg.type.includes(arg.name);

								const type =
									typeIncludesArgName && arg.type
										? arg.type.slice(arg.name.length + 1)
										: arg.type;

								return {
									name: arg.name,
									type: type,
								};
							});

						return (
							<AccordionItem
								value={method.name}
								key={method.name}
								className="rounded-md border px-5"
							>
								{/* Name */}
								<AccordionTrigger
									id={method.name}
									className="font-mono text-lg font-normal"
								>
									{method.name}
								</AccordionTrigger>

								<AccordionContent>
									<div className="flex flex-col gap-4 py-2 pr-8 text-base">
										{/* Description */}
										{method.description && (
											<div className="text-lg leading-7 text-f-200">
												{method.description}
											</div>
										)}

										<FunctionSignatureCode
											name={method.name}
											args={args || []}
											lang={props.lang}
											returnType={returnType}
										/>
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
