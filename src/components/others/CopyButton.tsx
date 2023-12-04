"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function CopyButton(props: { text: string }) {
	const [copied, setCopied] = useState(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(props.text);
		setCopied(true);
		setTimeout(() => setCopied(false), 1000);
	}

	const Icon = copied ? CheckIcon : CopyIcon;

	return (
		<Button
			variant="outline"
			className="absolute right-4 top-4 p-2"
			onClick={copyToClipboard}
		>
			<Icon className="h-3 w-3 text-f-300" />
		</Button>
	);
}
