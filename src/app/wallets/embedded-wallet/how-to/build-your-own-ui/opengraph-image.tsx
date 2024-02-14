import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Build a custom UI for connecting Embedded wallet",
		icon: "wallets",
	});
}
