import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "How Embedded Wallet works",
		icon: "wallets",
	});
}
