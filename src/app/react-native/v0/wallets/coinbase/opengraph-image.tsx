import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Coinbase Wallet",
		icon: "react",
	});
}
