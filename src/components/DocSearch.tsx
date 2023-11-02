"use client";

import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";

function Search() {
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 500);

	const { isLoading, data } = useQuery({
		queryKey: ["search-index", debouncedQuery],
		queryFn: async () => {
			const res = await fetch(`/api/search?q=${encodeURI(debouncedQuery)}`);
			return res.json();
		},
		enabled: debouncedQuery.length > 0,
	});

	// console.log({ isLoading, data });

	return (
		<QueryClientProvider client={queryClient}>
			<Input
				placeholder="Search docs"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
			/>
		</QueryClientProvider>
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

export function DocSeach() {
	return (
		<QueryClientProvider client={queryClient}>
			<Search />
		</QueryClientProvider>
	);
}
