import Link from "next/link";
import { headerHeight } from "@/constants";
import type { ArgType, LangType, MethodType, PropertyType } from "./types";
import { Methods } from "./Methods";
import { Properties } from "./Properties";
import clsx from "clsx";
import { Anchor } from "../ui/Anchor";
import { FunctionSignatureCode } from "./SignatureCode";

export function ReferenceLayout(props: {
	lang: LangType;
	sideBar: {
		name: string;
		links: {
			classes?: SideBarLink[];
			functions?: SideBarLink[];
		};
		activeLink: string;
	};
	selected:
		| {
				type: "class";
				name: string;
				description?: string;
				methods?: MethodType[];
				properties?: PropertyType[];
		  }
		| {
				type: "function";
				name: string;
				description?: string;
				return?: {
					type: string;
					description?: string;
				};
				args?: ArgType[];
		  };
}) {
	const { selected } = props;

	return (
		<main className="relative grow">
			<div
				className="grid md:grid-cols-[minmax(250px,min-content)_1fr_350px]"
				style={{
					display: "grid",
					gridGap: "1rem",
				}}
			>
				{/* Left */}
				<div className="hidden md:block">
					<SideBar {...props.sideBar} />
				</div>

				{/* Center */}
				<div className="flex flex-col gap-14 p-6 pt-10">
					{/* Name & Description */}
					<div className="flex flex-col gap-6">
						<h1 className="break-all font-mono text-xl md:text-4xl md:font-medium">
							{selected.name}
						</h1>

						{selected.description && (
							<p className="text-lg text-f-200">{selected.description}</p>
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
									<h2 className="text-3xl text-accent-500"> Signature </h2>
									<div className="h-4"></div>
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

				{/* Right */}
				<div className="p-6"></div>
			</div>
		</main>
	);
}

type SideBarLink = {
	name: string;
	href: string;
};

function SideBar(props: {
	links: {
		classes?: SideBarLink[];
		functions?: SideBarLink[];
	};
	activeLink: string;
	name: string;
}) {
	const { classes, functions } = props.links;

	return (
		<div
			className={clsx(
				"styled-scrollbar sticky overflow-y-scroll",
				"p-8 pb-10 pr-2",
			)}
			style={{
				height: `calc(100vh - ${headerHeight}px)`,
				top: headerHeight + "px",
			}}
		>
			<p className="mb-5 text-xl">{props.name}</p>

			<div className="flex flex-col gap-10">
				{classes && (
					<SideBarLinkItemList
						links={classes}
						activeLink={props.activeLink}
						category="Classes"
						id="classes"
					/>
				)}

				{functions && (
					<SideBarLinkItemList
						links={functions}
						activeLink={props.activeLink}
						category="Functions"
						id="functions"
					/>
				)}
			</div>
		</div>
	);
}

function SideBarLinkItemList(props: {
	links: SideBarLink[];
	activeLink: string;
	category: string;
	id: string;
}) {
	return (
		<div>
			<Anchor id={props.id}>
				<h2 className="text-lg text-accent-500"> {props.category} </h2>
			</Anchor>

			<ul className="mt-5 flex flex-col gap-4 pr-3">
				{props.links.map((link) => {
					return (
						<SideBarLinkItem
							key={link.name}
							link={link}
							activeLink={props.activeLink}
						/>
					);
				})}
			</ul>
		</div>
	);
}

function SideBarLinkItem(props: { link: SideBarLink; activeLink: string }) {
	return (
		<li>
			<Link
				scroll={true}
				href={props.link.href}
				className={
					props.activeLink === props.link.name
						? "font-mono text-f-100"
						: "font-mono text-f-200"
				}
			>
				{props.link.name}
			</Link>
		</li>
	);
}
