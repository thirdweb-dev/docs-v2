import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Connect users with Embedded Wallet",
		icon: "wallets",
	});
}
