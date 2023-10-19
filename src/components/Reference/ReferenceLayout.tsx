import type { ReferenceLayoutProps } from "./types";
import { Methods } from "./Methods";
import { Properties } from "./Properties";
import { FunctionSignatureCode } from "./SignatureCode";
import { ReferenceMenuMobile, ReferenceSideBar } from "./Sidebar";
import { Breadcrumb } from "../ui/Breadcrumb";
import { Button } from "../ui/button";
import clsx from "clsx";
import { SidebarLayout } from "../Layouts/SidebarLayout";

export function ReferenceLayout(props: ReferenceLayoutProps) {
	const { selected, sideBar, customContent } = props;

	return (
		<SidebarLayout sideBar={<ReferenceSideBar {...sideBar} />}>
			<div>
				<Breadcrumb crumbs={props.crumbs} />

				<ReferenceMenuMobile {...sideBar} />

				<div className="h-8" />

				{selected && (
					<div className="flex flex-col gap-12 duration-300 animate-in fade-in-0">
						{/* Name & Description */}
						<div className="flex flex-col gap-4">
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

				{!selected && customContent}
			</div>
		</SidebarLayout>
	);
}
