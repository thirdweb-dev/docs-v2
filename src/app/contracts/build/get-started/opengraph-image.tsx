import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Get Started with thirdweb Solidity SDK",
		icon: "solidity",
	});
}
