"use client";

import {
	QueryClient,
	QueryClientProvider,
	keepPreviousData,
	useQuery,
} from "@tanstack/react-query";

import { memo, useEffect, useState } from "react";
import { Button } from "./ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import {
	Search as SearchIcon,
	FileText as FileTextIcon,
	AlignLeft as SectionIcon,
	FolderSearch as FolderSearchIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DynamicHeight } from "./others/DynamicHeight";
import { SearchResult } from "@/app/api/search/types";

type Tag =
	| "React"
	| "React Native"
	| "Unity"
	| "TypeScript"
	| "Storage"
	| "Wallets"
	| "Python"
	| "Go";

function SearchModalContent(props: { closeModal: () => void }) {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 500);

	const [selectedTags, setSelectedTags] = useState<Record<Tag, boolean>>({
		React: true,
		"React Native": true,
		Unity: true,
		TypeScript: true,
		Storage: true,
		Wallets: true,
		Python: true,
		Go: true,
	});

	const searchQuery = useQuery({
		queryKey: ["search-index", debouncedQuery],
		queryFn: async () => {
			const res = await fetch(`/api/search?q=${encodeURI(debouncedQuery)}`);
			const results = (await res.json()) as SearchResult[];

			const _selectedTags: typeof selectedTags = {
				React: false,
				"React Native": false,
				Unity: false,
				TypeScript: false,
				Storage: false,
				Wallets: false,
				Python: false,
				Go: false,
			};

			results.forEach((r) => {
				const tag = getTagFromHref(r.pageHref);
				if (tag) {
					_selectedTags[tag] = true;
				}
			});

			setSelectedTags(_selectedTags);

			return results;
		},
		enabled: debouncedQuery.length > 0,
		placeholderData: keepPreviousData,
	});

	const tagsSet: Set<Tag> = new Set();

	searchQuery.data?.forEach((result) => {
		const tag = getTagFromHref(result.pageHref);
		if (tag) {
			tagsSet.add(tag);
		}
	});

	const data = searchQuery.data;
	const noResults =
		debouncedQuery && searchQuery.isFetched && data && data.length === 0;

	const tags = Array.from(tagsSet);

	const handleLinkClick = () => {
		props.closeModal();
	};

	return (
		<div>
			{/* Search  */}
			<div className="flex items-center gap-4 border-b px-4">
				<SearchIcon className="h-5 w-5 shrink-0 text-f-300" />
				<Input
					onChange={(e) => {
						setQuery(e.target.value);
					}}
					placeholder="Search documentation"
					className={cn(
						"flex-1 border-none bg-transparent p-4 placeholder:text-base px-0 text-base placeholder:text-f-300 caret-accent-500",
						"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent",
					)}
				/>
			</div>

			<DynamicHeight>
				<div className="min-h-[200px]">
					{/* tags */}
					{tags && tags.length > 0 && (
						<div className="flex flex-wrap gap-2 border-b p-4">
							{tags.map((tag) => (
								<Button
									variant="ghost"
									key={tag}
									className={cn(
										"rounded-lg border px-3 py-1 text-sm ",
										selectedTags[tag]
											? "!bg-b-600 !text-f-100 border-f-300"
											: "!bg-b-800 !text-f-300",
									)}
									onClick={() => {
										setSelectedTags((prev) => ({
											...prev,
											[tag]: !prev[tag],
										}));
									}}
								>
									{tag}
								</Button>
							))}
						</div>
					)}

					{/* links */}
					{data && data.length > 0 && (
						<div className="styled-scrollbar flex max-h-[500px] min-h-[200px] flex-col gap-2 overflow-y-auto p-4">
							{data?.map((result, i) => {
								const tag = getTagFromHref(result.pageHref);
								if (tag && selectedTags[tag] !== true) return null;

								return (
									<div key={i} className="flex flex-col gap-2">
										<SearchResultItem
											type="page"
											href={result.pageHref}
											title={result.pageTitle}
											tag={tag}
											onClick={handleLinkClick}
										/>

										{result.sections && (
											<div className="flex flex-col gap-2 border-l pl-3">
												{result.sections?.map((sectionData) => {
													return (
														<SearchResultItem
															type="section"
															href={result.pageHref + sectionData.href}
															key={sectionData.href}
															title={sectionData.title}
															content={sectionData.content}
															onClick={handleLinkClick}
														/>
													);
												})}
											</div>
										)}
									</div>
								);
							})}
						</div>
					)}

					{/* No Results */}
					{noResults && (
						<div className="flex min-h-[200px] items-center justify-center">
							<p> No Results </p>
						</div>
					)}

					{!debouncedQuery && (!data || data.length === 0) && (
						<div className="flex min-h-[200px] items-center justify-center">
							<FolderSearchIcon className="h-12 w-12 text-f-300" />
						</div>
					)}
				</div>
			</DynamicHeight>
		</div>
	);
}

function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

const queryClient = new QueryClient();

export function DocSearch() {
	const [open, setOpen] = useState(false);
	return (
		<QueryClientProvider client={queryClient}>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild className="hidden w-56 justify-start md:flex">
					<Button variant="outline">Search Docs</Button>
				</DialogTrigger>

				<DialogTrigger asChild className="md:hidden">
					<Button variant="ghost">
						<SearchIcon className="h-5 w-5 text-f-300" />
					</Button>
				</DialogTrigger>

				<DialogContent className="bg-b-900 sm:max-w-[550px]">
					<SearchModalContent
						closeModal={() => {
							setOpen(false);
						}}
					/>
				</DialogContent>
			</Dialog>
		</QueryClientProvider>
	);
}

function getTagFromHref(href: string): Tag | undefined {
	if (href.includes("react-native")) {
		return "React Native";
	} else if (href.includes("react")) {
		return "React";
	} else if (href.includes("unity")) {
		return "Unity";
	} else if (href.includes("typescript")) {
		return "TypeScript";
	} else if (href.includes("storage")) {
		return "Storage";
	} else if (href.includes("wallets")) {
		return "Wallets";
	} else if (href.includes("python")) {
		return "Python";
	} else if (href.includes("go")) {
		return "Go";
	}
}

function SearchResultItem(props: {
	href: string;
	title: string;
	content?: string;
	tag?: string;
	type: "page" | "section";
	onClick?: () => void;
}) {
	return (
		<Link
			className="flex gap-3 rounded-sm bg-b-700 px-4 py-3 text-f-300 transition-colors hover:bg-b-600 hover:text-f-100"
			href={props.href}
			onClick={props.onClick}
		>
			{props.type === "section" && (
				<SectionIcon className="h-5 w-5 text-f-300" />
			)}

			<div className="flex w-full flex-col gap-1">
				<div className="flex flex-wrap items-center justify-between gap-2 break-all text-base text-f-100">
					<div className="flex items-center gap-2">
						{props.type === "page" && (
							<FileTextIcon className="h-5 w-5 text-f-300" />
						)}

						{props.title}
					</div>

					{props.tag && (
						<span
							key={props.tag}
							className={cn(
								"rounded-lg border px-2 py-1 text-xs bg-b-800 text-f-300 shrink-0",
							)}
						>
							{props.tag}
						</span>
					)}
				</div>
				{props.content && (
					<div className="break-all text-sm">{props.content}</div>
				)}
			</div>
		</Link>
	);
}

// const HighlightMatches = memo(function _HighlightMatches(props: {
// 	value: string;
// 	match: string;
// }) {
// 	const tokens = getMatches(props);
// 	return (
// 		<div>
// 			{tokens.map((t) => {
// 				return (
// 					<span
// 						key={t.text}
// 						className={t.highlight ? "bg-b-700 text-f-100" : "text-f-300"}
// 					>
// 						{t.text}
// 					</span>
// 				);
// 			})}
// 		</div>
// 	);
// });
