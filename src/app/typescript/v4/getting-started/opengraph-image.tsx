import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Getting Started with thirdweb TypeScript SDK",
		icon: "typescript",
	});
}
