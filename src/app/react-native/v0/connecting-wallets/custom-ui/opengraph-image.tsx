import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Create Custom UI for Connecting Wallets",
		icon: "react",
	});
}
