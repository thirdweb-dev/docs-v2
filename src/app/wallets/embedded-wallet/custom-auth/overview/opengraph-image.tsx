import { openGraphImg } from "@og";

export const runtime = "edge";

export default function Image() {
	return openGraphImg({
		title: "Custom Authentication with Embedded Wallet",
		icon: "wallets",
	});
}
