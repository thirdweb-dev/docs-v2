"use client";

import type { VM } from "@stackblitz/sdk";
import { useState, useRef, useCallback } from "react";
import { Button } from "../../ui/button";
import { Play as PlayIcon } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Spinner } from "../../ui/Spinner/Spinner";

const PROJECT_ID = "stackblitz-starters-hnzmb1"; // TODO - recreate this project with thirdweb official account

export function Playground(props: { code: string }) {
	const { initialize, embedRef } = useEditor();

	return (
		<Dialog>
			<div className="mb-10 flex h-24 items-center justify-center rounded-lg border bg-b-800">
				<DialogTrigger asChild>
					<Button onClick={() => initialize(props.code)} className="gap-2">
						<PlayIcon className="h-4 w-4" />
						Try in Playground
					</Button>
				</DialogTrigger>

				<DialogContent className="max-w-full overflow-hidden rounded-lg">
					<div>
						<h2 className="p-4 text-lg font-semibold">
							thirdweb Next.js Playground
						</h2>
						<div
							ref={embedRef}
							className="flex h-[calc(100vh-60px)] items-center justify-center border-t"
						>
							<Spinner className="h-16 w-16 text-f-100" />
						</div>
					</div>
				</DialogContent>
			</div>
		</Dialog>
	);
}

export function useEditor() {
	const [vm, setVm] = useState<VM | null>(null);
	const [status, setStatus] = useState<"notReady" | "ready" | "loading">(
		"notReady",
	);
	const embedRef = useRef<HTMLDivElement>(null);

	const initialize = useCallback(async (code: string) => {
		const sdk = (await import("@stackblitz/sdk")).default;
		setStatus("loading");
		const el = embedRef.current;
		if (!el) {
			return;
		}

		const vm = await sdk.embedProjectId(el, PROJECT_ID, {
			openFile: ["pages/index.tsx"],
			terminalHeight: 50,
			showSidebar: true,
			hideNavigation: false,
			hideExplorer: false,
			theme: "dark",
			view: "default",
		});

		await vm.getFsSnapshot();

		vm.applyFsDiff({
			create: {
				"pages/index.tsx": code,
			},
			destroy: [],
		});

		setStatus("ready");
		setVm(vm);
	}, []);

	const openFile = useCallback(
		(filePath: string) => {
			vm?.editor.openFile(filePath);
		},
		[vm],
	);

	return {
		initialize,
		vm,
		status,
		openFile,
		embedRef,
	};
}
