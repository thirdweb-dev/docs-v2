"use client";

import type { PropertyType } from "./types";
import { Anchor } from "../ui/Anchor";

export function Properties(props: { properties: PropertyType[] }) {
	return (
		<div>
			<Anchor id="properties">
				<h2 className="text-xl text-f-300"> Properties </h2>
			</Anchor>

			<div className="h-5" />

			<div className="flex flex-col gap-8">
				{props.properties.map((property) => {
					return (
						<div key={property.name} className="">
							<Anchor id={property.name}>
								<h3 className="font-mono text-lg">{property.name}</h3>
							</Anchor>

							<div className="mt-2 flex flex-col gap-8 pr-8 text-base">
								{/* Description */}
								{property.description && (
									<div className="text-lg leading-7 text-f-200">
										{property.description}
									</div>
								)}

								{property.type && (
									<div>
										{property.type && (
											<code className="inline-flex rounded-md border bg-b-800 p-2 font-mono text-sm text-f-100">
												{property.type}
											</code>
										)}
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
