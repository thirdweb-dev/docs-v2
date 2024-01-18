import { openGraphImg } from "@og";

export const runtime = "edge";

// hello
export default function Image() {
	return openGraphImg({
		title: "Build apps and games on any EVM chain",
		icon: "thirdweb",
	});
}
