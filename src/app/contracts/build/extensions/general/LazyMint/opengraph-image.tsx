import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "LazyMint contract",
		icon: "solidity",
	});
}
