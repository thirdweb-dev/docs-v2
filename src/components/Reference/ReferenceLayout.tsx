import type { ReferenceLayoutProps } from "./types";
import { Methods } from "./Methods";
import { Properties } from "./Properties";
import { FunctionSignatureCode } from "./SignatureCode";
import { ReferenceSideBar } from "./Sidebar";
import { Breadcrumb } from "../ui/Breadcrumb";

export function ReferenceLayout(props: ReferenceLayoutProps) {
	const { selected } = props;

	return (
		<main className="container relative grow">
			<div className="flex gap-8">
				{/* Left */}
				<ReferenceSideBar {...props.sideBar} />

				<div className="w-full max-w-6xl pb-20 pt-6">
					<Breadcrumb crumbs={props.crumbs} />

					<div className="h-7" />

					{selected && (
						<div className="flex flex-col gap-14">
							{/* Name & Description */}
							<div className="flex flex-col gap-6">
								<h1 className="break-all text-2xl font-semibold tracking-tight text-f-100 md:text-3xl">
									{selected.name}
								</h1>

								{selected.description && (
									<p className="break-all text-base leading-7 text-f-200">
										{selected.description}
									</p>
								)}
							</div>

							{selected.type === "class" && (
								<>
									{/* Methods */}
									{selected.methods && selected.methods.length > 0 && (
										<Methods methods={selected.methods} lang={props.lang} />
									)}

									{/* Properties */}
									{selected.properties && selected.properties.length > 0 && (
										<Properties properties={selected.properties} />
									)}
								</>
							)}

							{selected.type === "function" && (
								<>
									{selected.args && selected.args.length > 0 && (
										<div>
											<h2 className="text-lg text-f-300"> Signature </h2>
											<div className="h-3"></div>
											<FunctionSignatureCode
												name={selected.name}
												args={selected.args}
												returnType={selected.return?.type}
												lang={props.lang}
											/>
										</div>
									)}
								</>
							)}
						</div>
					)}

					{!selected && <div className=""> TODO TABLE </div>}
				</div>

				{/* Right */}
				<div className="hidden w-64 shrink-0 md:block"></div>
			</div>
		</main>
	);
}
