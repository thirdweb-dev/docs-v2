import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Create custom UI for connecting wallets",
		icon: "react",
	});
}
