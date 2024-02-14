import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Custom Auth Server for Embedded Wallet",
		icon: "wallets",
	});
}
