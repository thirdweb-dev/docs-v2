import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "AccountExtension contract",
		icon: "solidity",
	});
}
