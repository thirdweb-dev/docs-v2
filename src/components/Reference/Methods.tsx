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

			<div className="flex flex-col gap-12">
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
						<div key={method.name}>
							{/* Name */}
							<Anchor id={method.name}>
								<h2 className="font-mono text-lg">{method.name}</h2>
							</Anchor>

							<div className="mt-3 flex flex-col gap-4">
								{/* Description */}
								{method.description && (
									<div className="leading-7 text-f-300">
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
						</div>
					);
				})}
			</div>
		</div>
	);
}
