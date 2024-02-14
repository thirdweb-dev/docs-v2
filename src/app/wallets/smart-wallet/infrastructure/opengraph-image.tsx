import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Bundler & Paymaster Infrastructure",
		icon: "thirdweb",
	});
}
