import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Get started with Embedded Wallet",
		icon: "wallets",
	});
}
